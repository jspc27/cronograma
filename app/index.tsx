import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../app/styles/indexStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../App";
import { BarChart } from "react-native-chart-kit";
import ProgressCircle from "../app/componentes/ProgressCircle";

const diasSemana = ["D", "L", "M", "M", "J", "V", "S"];
const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [fecha, setFecha] = useState(new Date());

  // Datos para la gráfica de barras
  const actividadesPorMes = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        data: [20, 45, 28, 35, 26, 30, 42, 39, 29, 36, 40, 33],
        color: (opacity = 1) => `#FF9800`,
        strokeWidth: 2
      }
    ]
  };

  // Datos para los círculos de progreso
  const tareasCompletadas = {
    porcentaje: 50,
    color: "#E91E63"
  };

  const distribucionTareas = {
    completadas: {
      porcentaje: 70,
      color: "#28A745"
    },
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `#FF9800`,
    strokeWidth: 2,
    barPercentage: 0.6,
    decimalPlaces: 0,
    useShadowColorFromDataset: false,
    labelColor: (opacity = 1) => `rgba(29, 53, 87, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  const obtenerNombreMes = () => {
    const opciones = { month: "long" as const, year: "numeric" as const };
    return fecha.toLocaleDateString("es-ES", opciones);
  };

  const cambiarMes = (incremento: number) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMonth(fecha.getMonth() + incremento);
    setFecha(nuevaFecha);
  };

  const diasEnMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
  const primerDiaMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay();

  const generarMatrizCalendario = () => {
    const matriz = [];
    let diaActual = 1;
    for (let i = 0; i < 6; i++) {
      const semana = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < primerDiaMes) || diaActual > diasEnMes) {
          semana.push(null);
        } else {
          semana.push(diaActual);
          diaActual++;
        }
      }
      matriz.push(semana);
      if (diaActual > diasEnMes) break;
    }
    return matriz;
  };

  const calendarioMatriz = generarMatrizCalendario();

  // Obtener el día actual para resaltarlo
  const fechaActual = new Date();
  const esMismoMes = fecha.getMonth() === fechaActual.getMonth() && fecha.getFullYear() === fechaActual.getFullYear();
  const diaActual = fechaActual.getDate();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F6FBFF" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Calendario */}
          <View style={styles.calendarWrapper}>
            <View style={styles.container2}>
              <View style={styles.headerC}>
                <TouchableOpacity onPress={() => cambiarMes(-1)}>
                  <Text style={styles.flecha}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{obtenerNombreMes()}</Text>
                <TouchableOpacity onPress={() => cambiarMes(1)}>
                  <Text style={styles.flecha}>{">"}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.diasSemana}>
                {diasSemana.map((dia, index) => (
                  <Text key={index} style={styles.diaSemana}>{dia}</Text>
                ))}
              </View>

              {calendarioMatriz.map((semana, indexSemana) => (
                <View key={indexSemana} style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginBottom: 6 }}>
                  {semana.map((dia, indexDia) => (
                    <TouchableOpacity
                      key={indexDia}
                      style={[
                        styles.dia,
                        { opacity: dia ? 1 : 0 },
                        dia && esMismoMes && dia === diaActual ?
                          { backgroundColor: "#00A8CC", shadowColor: "#00A8CC", shadowOpacity: 0.5, shadowRadius: 5 } : {}
                      ]}
                      disabled={!dia}
                      onPress={() => {
                        if (dia) {
                          navigation.navigate("Listado", { fecha: `${dia}/${fecha.getMonth() + 1}/${fecha.getFullYear()}` });
                        }
                      }}
                    >
                      {dia ?
                        <Text style={[
                          styles.textoDia,
                          dia && esMismoMes && dia === diaActual ? { color: "#fff" } : {}
                        ]}>
                          {dia}
                        </Text> : null}
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Gráfica de barras */}
          <View style={styles.chartsContainer}>
            <View style={styles.barChartContainer}>
              <Text style={styles.barChartTitle}>Actividades por mes en el año</Text>
              <BarChart
                data={actividadesPorMes}
                width={screenWidth - 60}  // Reducir ancho
                height={150}  // Reducir altura
                chartConfig={{
                  ...chartConfig,
                  barPercentage: 0.5,  // Disminuir tamaño de las barras
                  propsForLabels: {
                    fontSize: 10,  // Reducir tamaño de etiquetas
                    rotation: -20  // Menos inclinación de etiquetas
                  }
                }}
                yAxisLabel=""
                yAxisSuffix=""
                fromZero
                showValuesOnTopOfBars
                style={{
                  marginVertical: 3,
                }}
              />
            </View>
          </View>

          {/* Gráficas */}
          <View style={styles.chartsContainer}>
            <View style={styles.pieChartsRow}>
              <View style={styles.pieChartContainer}>
                <ProgressCircle
                  size={70}
                  strokeWidth={11}
                  percentage={distribucionTareas.completadas.porcentaje}
                  color={distribucionTareas.completadas.color}
                  label="Total de actividades en el mes"
                  valueLabel="70%"
                />
              </View>
              <View style={styles.pieChartContainer}>
                <ProgressCircle
                  size={70}
                  strokeWidth={11}
                  percentage={tareasCompletadas.porcentaje}
                  color={tareasCompletadas.color}
                  label="Actividades completadas en el mes"
                  valueLabel="50%"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Prioridad")}>
          <View style={styles.footerIconContainer}>
            <Icon name="chart-bar" size={30} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate("index")}>
          <View style={styles.footerIconContainerHome}>
            <Icon name="home" size={40} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Sugerencias")}>
          <View style={styles.footerIconContainer}>
            <Icon name="lightbulb-on-outline" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}