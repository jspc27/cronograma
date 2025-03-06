import React, { useState, useEffect } from "react";
import { 
  View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, 
  Alert, KeyboardAvoidingView, Platform, FlatList 
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from "react-native-popup-menu";
import { TimePickerModal } from "react-native-paper-dates";
import { createTable, insertActivity, getActivities } from "../app/database/database"; // Importa las funciones de BD

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState("");
  const [hora, setHora] = useState("");
  const [activities, setActivities] = useState<{ id: number; actividad: string; hora: string }[]>([]);

  useEffect(() => {
    createTable(); //Crear la tabla en SQLite
    loadActivities(); //Cargar las actividades guardadas
  }, []);

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };

  const loadActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data as { id: number; actividad: string; hora: string }[]);
    } catch (error) {
      console.error("❌ Error al cargar actividades", error);
    }
  };

  const handleSave = async () => {
    if (!activity.trim() || !hora) {
      Alert.alert("Error", "Por favor, ingresa una actividad y selecciona la hora.");
      return;
    }

    try {
      await insertActivity(activity, hora);
      setModalVisible(false);
      setActivity("");
      setHora("");
      loadActivities(); 
    } catch (error) {
      console.error("❌ Error al guardar actividad", error);
    }
  };

  const colors = ["#28A745", "#FF9800", "#007BFF", "#E91E63", "#FFC107"];

  const getColorForIndex = (index: number): string => {
    return colors[index % colors.length];
  };

  return (
    <MenuProvider>
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
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={24} color="#1D3557" />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert("Opción 1")} text="Editar" />
                <MenuOption onSelect={() => Alert.alert("Opción 2")} text="Eliminar" />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <FlatList
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.activityContainer}>
              <View style={[styles.timeBadge, { backgroundColor: getColorForIndex(index) }]}>
                <Text style={styles.timeText}>{item.hora}</Text>
              </View>
              <Text style={styles.activityText}>{item.actividad}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay actividades</Text>}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Agregar Actividad</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Escribe la actividad"
              value={activity}
              onChangeText={setActivity}
            />
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.hora}>
              <Text style={styles.modalTitle2}>{hora ? hora : "Seleccionar Hora"}</Text>
            </TouchableOpacity>
            <TimePickerModal
              visible={visible}
              onDismiss={() => setVisible(false)}
              onConfirm={(output) => {
                setTime(output);
                const formattedTime = `${output.hours}:${output.minutes < 10 ? "0" : ""}${output.minutes}`;
                setHora(formattedTime);
                setVisible(false);
              }}
              hours={time.hours}
              minutes={time.minutes}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </MenuProvider>
  );
}
