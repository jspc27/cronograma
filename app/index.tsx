import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from "react-native";
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
    barPercentage: 0.5,
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

  const fechaActual = new Date();
  const esMismoMes = fecha.getMonth() === fechaActual.getMonth() && fecha.getFullYear() === fechaActual.getFullYear();
  const diaActual = fechaActual.getDate();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D3557" />
      <View style={styles.content}>
        {/* Calendario */}
        <View style={styles.calendarWrapper}>
          <View style={styles.container2}>
            <View style={styles.headerC}>
              <TouchableOpacity onPress={() => cambiarMes(-1)} style={styles.arrowButton}>
                <Text style={styles.flecha}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>{obtenerNombreMes()}</Text>
              <TouchableOpacity onPress={() => cambiarMes(1)} style={styles.arrowButton}>
                <Text style={styles.flecha}>{">"}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.diasSemana}>
              {diasSemana.map((dia, index) => (
                <Text key={index} style={styles.diaSemana}>{dia}</Text>
              ))}
            </View>

            {calendarioMatriz.map((semana, indexSemana) => (
              <View key={indexSemana} style={styles.semanaRow}>
                {semana.map((dia, indexDia) => (
                  <TouchableOpacity
                    key={indexDia}
                    style={[
                      styles.dia,
                      { opacity: dia ? 1 : 0 },
                      dia && esMismoMes && dia === diaActual ?
                        styles.diaActual : {}
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
                        dia && esMismoMes && dia === diaActual ? styles.textoDiaActual : {}
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
          <Text style={styles.barChartTitle}>Actividades por mes en el año</Text>
          <View style={styles.barChartContainer}>
            <BarChart
              data={actividadesPorMes}
              width={screenWidth - 40}
              height={130}
              chartConfig={{
                ...chartConfig,
                barPercentage: 0.5,
                fillShadowGradientOpacity: 1,
                propsForLabels: {
                  fontSize: 10,
                  fontWeight: 'bold',
                  fill: "#333",
                },
                propsForBackgroundLines: {
                  stroke: "#f0f0f0",
                  strokeWidth: 1
                },
                formatYLabel: (value) => value.toString(),
              }}
              yAxisLabel=""
              yAxisSuffix=""
              fromZero
              showValuesOnTopOfBars={true}
              withInnerLines={false}
              style={{
                marginVertical: 6,
                borderRadius: 16,
                paddingRight: 0,
                paddingLeft: 0,
                marginRight: 0,
                paddingBottom: 0,
              }}
              segments={4}
              withHorizontalLabels={true}
              flatColor={true}
              yLabelsOffset={10}
              xLabelsOffset={-14}
              horizontalLabelRotation={0}
            />
          </View>
        </View>

        {/* Gráficas circulares */}

        {/* Contenedor padre invisible para alinear con la gráfica de barras */}
        <View style={styles.pieChartsWrapper}>
          <View style={styles.pieChartsRow}>
            {/* Primera gráfica circular */}
            <View style={styles.pieChartContainer}>
              <ProgressCircle
                size={60}
                strokeWidth={10}
                percentage={distribucionTareas.completadas.porcentaje}
                color={distribucionTareas.completadas.color}
                label="Actividades completadas"
                valueLabel="70%"
              />
            </View>

            {/* Segunda gráfica circular */}
            <View style={styles.pieChartContainerLeft}>
              <ProgressCircle
                size={60}
                strokeWidth={10}
                percentage={tareasCompletadas.porcentaje}
                color={tareasCompletadas.color}
                label="actividades pendientes hoy"
                valueLabel="50%"
              />
            </View>
          </View>
        </View>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Prioridad")}>
          <View style={styles.footerIconContainer}>
            <Icon name="alert-circle-outline" size={30} color="#fff" />
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