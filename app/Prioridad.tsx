import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { styles } from "../app/styles/prioridadStyles";

export default function Prioridad() {
  const actividades = [
    "Actividad 1: Completar el informe",
    "Actividad 2: Reunión con el equipo",
    "Actividad 3: Revisar el código",
    "Actividad 4: Planificar la próxima semana",
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Pantalla de actividades con prioridad</Text>
      <ScrollView>
        {actividades.map((actividad, index) => (
          <View key={index} style={styles.activityContainer}>
            <Text style={styles.activityText}>{actividad}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}