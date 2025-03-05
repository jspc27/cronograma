import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Linking } from "react-native";
import styles from "./styles/sugerenciaStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@/App";

const openLink = (url: string) => {
  Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace:", err));
};

export default function Sugerencias() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <>
    <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("index")}>
          <Icon name="home" size={38} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.Text}>Estos son algunas sugerencias para que llenes tu cronograma</Text>
      </View>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {/* Primera fila */}
        <View style={styles.verticalContainer}>
          <TouchableOpacity style={[styles.box, styles.smallBox, { backgroundColor: "#2A9D8F" }]} onPress={() => openLink('https://www.upla.cl/noticias/wp-content/uploads/2020/05/guia-entrenamiento-avanzado.pdf')}>
            <Text style={styles.text}>Ejercicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.smallBox, { backgroundColor: "#E76F51" }]} onPress={() => openLink('https://yogaconblanca.com/rutinas-yoga/')}>
            <Text style={styles.text}>Yoga</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.box, styles.largeBoxVertical, { backgroundColor: "#F4A261" }]} onPress={() => openLink('https://www.planetadelibros.com/seleccion-editorial/libros-recomendados/132')}>
          <Text style={styles.text}>Leer</Text>
        </TouchableOpacity>

        {/* Segunda fila */}
        <TouchableOpacity style={[styles.box, styles.largeBox, { backgroundColor: "#264653" }]} onPress={() => openLink('https://meritmusic.org/es/best-musical-instruments-beginners/')}>
          <Text style={styles.text}>Practicar instrumento musical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.mediumBox, { backgroundColor: "#2A9D8F" }]} onPress={() => openLink('https://www.nalgeneiberia.com/blog/hogar/mejores-momentos-del-dia-para-beber-agua/')}>
          <Text style={styles.text}>Beber agua</Text>
        </TouchableOpacity>

        {/* Tercera fila */}
        <TouchableOpacity style={[styles.box, styles.smallBox1, { backgroundColor: "#F4A261" }]} onPress={() => openLink('https://www.aarp.org/espanol/salud/vida-saludable/info-2020/aprender-a-meditar.html')}>
          <Text style={styles.text}>Meditar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.largeBox, { backgroundColor: "#E9C46A" }]} onPress={() => openLink('https://www.recetasgratis.net/')}>
          <Text style={styles.text}>Cocinar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}