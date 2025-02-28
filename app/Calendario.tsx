import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles/CalendarioStyles";
import globalStyles from "../app/styles/indexStyles";

const diasSemana = ["D", "L", "M", "M", "J", "V", "S"];

export default function Calendario() {
  const [fecha, setFecha] = useState(new Date());

  const obtenerNombreMes = () => {
    const opciones: Intl.DateTimeFormatOptions = { 
      month: "long", 
      year: "numeric" 
    };
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Calendario</Text>
        <View style={globalStyles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} style={globalStyles.logo} />
        </View>
      </View>

      <View style={styles.main}>
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
            <Text key={index} style={styles.diaSemana}>
              {dia}
            </Text>
          ))}
        </View>

        {calendarioMatriz.map((semana, indexSemana) => (
          <View key={indexSemana} style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
            {semana.map((dia, indexDia) => (
              <View key={indexDia} style={[styles.dia, { opacity: dia ? 1 : 0 }]}>
                {dia ? <Text style={styles.textoDia}>{dia}</Text> : null}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}