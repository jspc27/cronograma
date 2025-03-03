import React from "react";
import { View, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App"; // Asegúrate de importar el tipo correcto

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>(); // 🔹 Usar useRoute() en lugar de recibirlo por props

  return (
    <View>
      <Text>Fecha seleccionada: {route.params?.fecha || "No se recibió fecha"}</Text>
    </View>
  );
}
