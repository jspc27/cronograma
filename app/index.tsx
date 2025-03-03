import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../app/styles/indexStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../App"; 

const diasSemana = ["D", "L", "M", "M", "J", "V", "S"];

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [fecha, setFecha] = useState(new Date());

  const obtenerNombreMes = () => {
    const opciones: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" };
    return fecha.toLocaleDateString("es-ES", opciones);
  };

  const cambiarMes = (incremento: number) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMonth(fecha.getMonth() + incremento);
    setFecha(nuevaFecha);
  };

  const diasEnMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
  const primerDiaMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay();

  const generarMatrizCalendario = (): (number | null)[][] => {
    const matriz: (number | null)[][] = [];
    let diaActual = 1;
    for (let i = 0; i < 6; i++) {
      const semana: (number | null)[] = [];
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EquiTime</Text>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.box2}>
            <Text style={styles.boxText}>
              "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
            </Text>
            <Image source={require("../assets/images/bentobox.gif")} style={styles.libreta} />
          </View>

          {/* Calendario */}
          <View style={styles.container2}>
            <View style={styles.header1}>
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
  <View key={indexSemana} style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
    {semana.map((dia, indexDia) => (
      <TouchableOpacity
        key={indexDia}
        style={[styles.dia, { opacity: dia ? 1 : 0 }]}
        disabled={!dia} 
        onPress={() => {
          if (dia) {
            navigation.navigate("Listado", { fecha: `${dia}/${fecha.getMonth() + 1}/${fecha.getFullYear()}` });
          }
        }}
      >
        {dia ? <Text style={styles.textoDia}>{dia}</Text> : null}
      </TouchableOpacity>
    ))}
  </View>
))}

          </View>

          <View style={styles.box3}>
            <Text style={styles.boxText} onPress={() => navigation.navigate("Estadisticas")}>
              Aquí encontrarás tus Estadísticas
            </Text>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Estadisticas")}>
              <View style={styles.iconContainer}>
                <Icon name="chart-bar" size={40} color="#1D3557" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <Text style={styles.boxText} onPress={() => navigation.navigate("Sugerencias")}>
              Si no tienes idea sobre cómo llenar tu cronograma de actividades, aquí te dejamos unas Sugerencias
            </Text>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Sugerencias")}>
              <View style={styles.iconContainer}>
                <Icon name="lightbulb-on-outline" size={40} color="#1D3557" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
