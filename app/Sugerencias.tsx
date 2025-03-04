import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles/sugerenciaStyles";

export default function Sugerencias() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
      <Text style={styles.boxTextS}>
          Aquí tienes algunas ideas para organizar tu cronograma y aprovechar al máximo tu tiempo. ¡Elige lo que más te motive y ponte en marcha! ⏳✅
          </Text>
        {/* Primera fila */}
        <View style={[styles.box, styles.smallBox, { backgroundColor: "#F4A261" }]}>
          <Text style={styles.text}>Leer</Text>
        </View>
        <View style={[styles.box, styles.mediumBox, { backgroundColor: "#2A9D8F" }]}>
          <Text style={styles.text}>Beber agua</Text>
        </View>

        {/* Segunda fila */}
        <View style={[styles.box, styles.mediumBox, { backgroundColor: "#E76F51" }]}>
          <Text style={styles.text}>Tomar suplementos</Text>
        </View>
        <View style={[styles.box, styles.smallBox, { backgroundColor: "#E9C46A" }]}>
          <Text style={styles.text}>Ejercicio</Text>
        </View>

        {/* Tercera fila */}
        <View style={[styles.box, styles.largeBox, { backgroundColor: "#264653" }]}>
          <Text style={styles.text}>Practicar instrumento musical</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
