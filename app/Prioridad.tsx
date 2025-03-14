import React, { useState } from "react";
import { 
  View, 
  Text, 
  StatusBar, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Image 
} from "react-native";
import { styles } from "../app/styles/prioridadStyles";
import lisglobal from "../app/styles/listadoStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@/App";

export default function Prioridad() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  
  const [actividadesPrioridad, setActividadesPrioridad] = useState([
    {
      id: 1,
      titulo: "Completar el informe trimestral",
      descripcion: "Finalizar y enviar al supervisor antes del viernes",
      prioridad: "Alta",
      fecha: "15/03/2025",
      completada: false
    },
    {
      id: 2,
      titulo: "Reunión con el equipo de desarrollo",
      descripcion: "Revisar avances del proyecto y asignar nuevas tareas",
      prioridad: "Media",
      fecha: "16/03/2025",
      completada: false
    },
    {
      id: 3,
      titulo: "Revisar el código de la nueva funcionalidad",
      descripcion: "Verificar y corregir errores antes de la integración",
      prioridad: "Alta",
      fecha: "14/03/2025",
      completada: false
    },
    {
      id: 4,
      titulo: "Planificar la próxima sprint",
      descripcion: "Definir objetivos y distribuir tareas para el equipo",
      prioridad: "Media",
      fecha: "17/03/2025",
      completada: false
    },
  ]);

  const toggleCompleted = (id: number) => {
    setActividadesPrioridad(
      actividadesPrioridad.map(actividad => 
        actividad.id === id ? {...actividad, completada: !actividad.completada} : actividad
      )
    );
  };

  const getPrioridadColor = (prioridad: string) => {
    switch(prioridad) {
      case "Alta": return "#FF3B30";
      case "Media": return "#FF9500";
      case "Baja": return "#34C759";
      default: return "#007AFF";
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1D3557" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate("index")}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Actividades Prioritarias</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}