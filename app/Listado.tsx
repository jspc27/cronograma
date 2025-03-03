import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>(); 
  return (
  <SafeAreaView style={globalStyles.container}>
    <View style={globalStyles.header}>
        <Text style={globalStyles.title}>EquiTime</Text>
        <View style={globalStyles.logoContainer}>
            <Image source={require("../assets/images/logo.png")} style={globalStyles.logo} />
        </View>
      </View>
    <View>
      <Text>Fecha seleccionada: {route.params?.fecha || "No se recibió fecha"}</Text>
    </View>



    </SafeAreaView>



    
  );
}
