import React, { useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "../app/styles/prioridadStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@/App";
import * as Database from "../app/database/database";


export default function Prioridad() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [actividadesPrioridad, setActividadesPrioridad] = useState<
    { id: number; descripcion: string; hora: string; fecha: string; prioridad: number; completada: boolean }[]
  >([]);
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);
  useFocusEffect(
    React.useCallback(() => {
      cargarActividadesPrioritarias();
      return () => {}; 
    }, [])
  );

  const cargarActividadesPrioritarias = async () => {
    try {
      const datosPrioridad = await Database.getActividadesPrioritarias();
      const actividadesFormateadas = datosPrioridad.map(item => ({
        id: item.id,
        descripcion: item.actividad, 
        hora: item.hora,
        fecha: item.fecha,
        prioridad: item.prioridad,
        completada: completedActivities.includes(item.id)
      }));
      setActividadesPrioridad(actividadesFormateadas);
    } catch (error) {
      console.error("❌ Error al cargar actividades prioritarias", error);
    }
  };

  const toggleCompleted = (id: number) => {
    setCompletedActivities(prev => 
      prev.includes(id) 
        ? prev.filter(activityId => activityId !== id) 
        : [...prev, id]
    );
    
    setActividadesPrioridad(
      actividadesPrioridad.map(actividad => 
        actividad.id === id ? {...actividad, completada: !actividad.completada} : actividad
      )
    );
  };

  const getHoraColor = (index: number) => {
    const colors = ["#FF0000"];
    return colors[index % colors.length];
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
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {actividadesPrioridad.length === 0 ? (
          <Text style={styles.emptyText}>No hay actividades prioritarias</Text>
        ) : (
          actividadesPrioridad.map((actividad, index) => (
            <TouchableOpacity 
              key={actividad.id} 
              style={[
                styles.taskCard,
                actividad.completada && styles.taskCardCompleted
              ]}
              onPress={() => toggleCompleted(actividad.id)}
            >
              <View style={styles.taskHeader}>
                <View style={styles.taskTitleContainer}>
                  <View 
                    style={[
                      styles.priorityIndicator, 
                      {backgroundColor: getHoraColor(index)}
                    ]} 
                  />
                  <Text 
                    style={[
                      styles.taskTitle,
                      actividad.completada && styles.taskTitleCompleted
                    ]}
                  >
                    {actividad.descripcion}
                  </Text>
                </View>
                <View style={styles.checkButton}>
                  <MaterialCommunityIcons 
                    name="pin" 
                    size={24} 
                    color="#EC0000" 
                  />
                </View>
              </View>
              
              <View style={styles.taskFooter}>
                <View style={styles.tagContainer}>
                  <Text 
                    style={[
                      styles.priorityTag, 
                      {backgroundColor: getHoraColor(index)}
                    ]}
                  >
                    {actividad.hora}
                  </Text>
                </View>
                <Text style={styles.dateText}>
                  <MaterialCommunityIcons name="calendar" size={14} color="#8A8A8E" />
                  {" "}{actividad.fecha}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}