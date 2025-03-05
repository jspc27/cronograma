import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>(); 
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("index")}>
          <Icon name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.Text}>
          {route.params?.fecha ? formatDate(route.params.fecha) : "No se recibió fecha"}
        </Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#1D3557" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="filter-list" size={24} color="#1D3557" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#1D3557" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
