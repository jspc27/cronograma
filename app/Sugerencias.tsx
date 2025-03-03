import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/sugerenciaStyles";

const sugerencias = [
  { texto: "Si tienes una gran imaginación, la lectura puede llevarte aún más lejos. ¡Cada libro es una nueva aventura! 📚✨", imagen: require("../assets/images/libros.png") },
  { texto: "El yoga es el arte de estirar el cuerpo y relajar la mente. ¡Pruébalo y encuentra tu equilibrio! 🧘‍♀️🌿", imagen: require("../assets/images/yoga.png") },
  { texto: "Levantar pesas no solo te hace más fuerte, también te da actitud. ¡Sé tu mejor versión! 💪🔥", imagen: require("../assets/images/ejercicio.png") },
  { texto: "En los juegos puedes desconectarte del mundo y conectar con la diversión. ¡Que empiece la partida! 🎮🎲", imagen: require("../assets/images/juego.png") },
];

export default function Sugerencias() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>EquiTime</Text>
        <View style={globalStyles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} style={globalStyles.logo} />
        </View>
      </View>

      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View style={globalStyles.content}>
          <Text style={styles.boxTextS}>
          Aquí tienes algunas ideas para organizar tu cronograma y aprovechar al máximo tu tiempo. ¡Elige lo que más te motive y ponte en marcha! ⏳✅
          </Text>
          <Image source={require("../assets/images/bentobox.gif")} style={globalStyles.libreta} />

          {sugerencias.map((item, index) => (
            <View key={index} style={[styles.boxs, { flexDirection: index % 2 === 0 ? "row" : "row-reverse" }]}>
              <Text style={styles.boxTextS}>{item.texto}</Text>
              <Image source={item.imagen} style={styles.img} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
