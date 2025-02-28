import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../app/styles/indexStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../App"; // Importamos los tipos

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>(); // 🔹 Especificamos los tipos

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con título y logo */}
      <View style={styles.header}>
        <Text style={styles.title}>Cronograma</Text>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        </View>
      </View>

      {/* Contenido principal con los dos cuadros */}
      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.boxText}>"El éxito es la suma de pequeños esfuerzos repetidos día tras día."</Text>
        </View>

        {/* Cuadro con imagen de libreta */}
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Calendario")}>
          <Image source={require("../assets/images/libreta2.png")} style={styles.libreta} />
        </TouchableOpacity>
      </View>

      {/* Footer con iconos en cuadros redondeados */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Estadisticas")}>
          <View style={styles.iconContainer}>
            <Icon name="chart-bar" size={40} color="#1D3557" />
          </View>
          <Text style={styles.footerButtonText}>Estadísticas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Sugerencias")}>
          <View style={styles.iconContainer}>
            <Icon name="lightbulb-on-outline" size={40} color="#1D3557" />
          </View>
          <Text style={styles.footerButtonText}>Sugerencias</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
