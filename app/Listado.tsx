import React, { useState, useEffect } from "react";
import { 
  View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, 
  Alert, KeyboardAvoidingView, Platform, FlatList, StatusBar, Switch 
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from "react-native-popup-menu";
import { TimePickerModal } from "react-native-paper-dates";
import { createTable, insertActivity, getActivities, deleteActivities, updateActivity } from "../app/database/database";

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState("");
  const [hora, setHora] = useState("");
  const [prioridad, setPrioridad] = useState(false);
  const [activities, setActivities] = useState<{ id: number; actividad: string; hora: string; prioridad: number }[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    createTable();
    loadActivities(); 
  }, []);

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };

  const loadActivities = async () => {
    try {
      const data = await getActivities(route.params.fecha);
      setActivities(data as { id: number; actividad: string; hora: string; prioridad: number }[]);
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
      if (isEditing && editingId !== null) {
        await updateActivity(editingId, activity, hora, prioridad ? 1 : 0);
        setIsEditing(false);
        setEditingId(null);
      } else {
        await insertActivity(activity, hora, route.params.fecha, prioridad ? 1 : 0);
      }
      setModalVisible(false);
      setActivity("");
      setHora("");
      setPrioridad(false);
      loadActivities(); 
    } catch (error) {
      console.error("❌ Error al guardar actividad", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteActivities(selectedActivities);
      setSelectedActivities([]);
      setIsDeleting(false);
      loadActivities();
    } catch (error) {
      console.error("❌ Error al eliminar actividades", error);
    }
  };

  const toggleSelectActivity = (id: number) => {
    if (isDeleting) {
      setSelectedActivities((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((activityId) => activityId !== id)
          : [...prevSelected, id]
      );
    } else if (isEditing) {
      handleUpdate(id);
    }
  };

  const handleUpdate = (id: number) => {
    const selectedActivity = activities.find((activity) => activity.id === id);
    if (!selectedActivity) return;
    setActivity(selectedActivity.actividad);
    setHora(selectedActivity.hora);
    setPrioridad(selectedActivity.prioridad === 1);
    setEditingId(id);
    setModalVisible(true);
  };

  const cancelSelection = () => {
    setSelectedActivities([]);
    setIsDeleting(false);
    setIsEditing(false);
  };

  const colors = ["#28A745", "#FF9800", "#007BFF", "#E91E63", "#FFC107"];

  const getColorForIndex = (index: number): string => {
    return colors[index % colors.length];
  };

  const formatTime = (hours: number, minutes: number) => {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <MenuProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
                <MenuOption onSelect={() => setIsDeleting(true)} text="Eliminar" />
                <MenuOption onSelect={() => setIsEditing(true)} text="Editar" />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <FlatList 
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => isDeleting || isEditing ? toggleSelectActivity(item.id) : null}
              style={[
                styles.activityContainer,
                selectedActivities.includes(item.id) && styles.selectedActivity,
              ]}
            >
              {(isDeleting || isEditing) && (
                <View style={styles.selectionCircle}>
                  {selectedActivities.includes(item.id) && <View style={styles.innerCircle} />}
                </View>
              )}
              <View style={[styles.timeBadge, { backgroundColor: getColorForIndex(index) }]}>
                <Text style={styles.timeText}>{item.hora}</Text>
              </View>
              <Text style={styles.activityText}>{item.actividad}</Text>
              {item.prioridad === 1 && <View style={styles.prioridadAlta} />}
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay actividades</Text>}
        />

        {isDeleting && (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteButtonText}>Borrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton1} onPress={cancelSelection}>
              <Text style={styles.cancelButtonText1}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}

        {isEditing && (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.cancelButton1} onPress={cancelSelection}>
              <Text style={styles.cancelButtonText1}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}
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
              <Text style={styles.modalTitle}>{isEditing ? "Editar Actividad" : "Agregar Actividad"}</Text>
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
                const formattedTime = formatTime(output.hours, output.minutes);
                setHora(formattedTime);
                setVisible(false);
              }}
              hours={time.hours}
              minutes={time.minutes}
            />
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>¿La actividad tiene prioridad alta?</Text>
              <Switch
                value={prioridad}
                onValueChange={setPrioridad}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>{isEditing ? "Actualizar" : "Guardar"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </MenuProvider>
  );
}