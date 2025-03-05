import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>(); 
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
  <SafeAreaView style={globalStyles.container}>
    <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("index")}>
          <Icon name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.Text}>Fecha seleccionada: {route.params?.fecha || "No se recibió fecha"}</Text>
      </View>
    


    </SafeAreaView>



    
  );
}
