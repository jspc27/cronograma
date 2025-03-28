import React, { useState, useEffect } from "react";
import {
  View, Text, SafeAreaView, TouchableOpacity, TextInput,
  StatusBar, Animated, Easing, FlatList, Modal, Alert, KeyboardAvoidingView, Platform, Switch
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from "react-native-popup-menu";
import { TimePickerModal } from "react-native-paper-dates";
import * as Database from "../app/database/database";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles as prioridadStyles } from "../app/styles/prioridadStyles";

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
  const [filteredActivities, setFilteredActivities] = useState<{ id: number; actividad: string; hora: string; prioridad: number }[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const animation = useState(new Animated.Value(0))[0];
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);



  useEffect(() => {
    Database.createTable();
    loadActivities();
  }, []);

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };

  const loadActivities = async () => {
    try {
      const data = await Database.getActivities(route.params.fecha);
      setActivities(data as { id: number; actividad: string; hora: string; prioridad: number }[]);
      setFilteredActivities(data as { id: number; actividad: string; hora: string; prioridad: number }[]);
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
        await Database.updateActivity(editingId, activity, hora, prioridad ? 1 : 0);
        setIsEditing(false);
        setEditingId(null);
      } else {
        await Database.insertActivity(activity, hora, route.params.fecha, prioridad ? 1 : 0);
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
      await Database.deleteActivities(selectedActivities);
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

  const toggleSearch = () => {
    Animated.timing(animation, {
      toValue: searchExpanded ? 0 : 1,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      setSearchExpanded(!searchExpanded);
    });
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filtered = activities.filter((activity) =>
        activity.actividad.toLowerCase().includes(text.toLowerCase()) ||
        activity.hora.includes(text)
      );
      setFilteredActivities(filtered);
    } else {
      setFilteredActivities(activities);
    }
  };


  const animatedHeaderStyle = {
    transform: [
      { rotateX: animation.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "90deg"] }) },
      { scaleY: animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] }) },
    ],
    opacity: animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
  };

  const animatedSearchStyle = {
    transform: [{ scaleX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }],
    opacity: animation,
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
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
  const toggleCompleted = (id: number) => {
    if (completedActivities.includes(id)) {
      Alert.alert("Actividad completada", "Esta actividad ya está marcada como completada y no se puede desmarcar o editar.");
      return;
    }

    Alert.alert(
      "Marcar como completada",
      "¿Deseas marcar la actividad como completada?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: () => {
            setCompletedActivities((prev) => [...prev, id]);
          },
        },
      ]
    );
  };
  return (
    <MenuProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1D3557" />

        <Animated.View style={[styles.header, animatedHeaderStyle]}>
          {!searchExpanded && (
            <>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("index")}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>
                {route.params?.fecha ? formatDate(route.params.fecha) : "No se recibió fecha"}
              </Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={toggleSearch}>
                  <MaterialCommunityIcons name="magnify" size={24} color="#fff" />
                </TouchableOpacity>
                <Menu>
                  <MenuTrigger>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption onSelect={() => setIsDeleting(true)} text="Eliminar" />
                    <MenuOption onSelect={() => setIsEditing(true)} text="Editar" />
                  </MenuOptions>
                </Menu>
              </View>
            </>
          )}
        </Animated.View>


        {searchExpanded && (
          <Animated.View style={[styles.header, animatedSearchStyle]}>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#f0f0f0", borderRadius: 10, paddingHorizontal: 10 }}>
              <TextInput
                style={{ flex: 1, height: 40 }}
                placeholder="Buscar..."
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <TouchableOpacity onPress={toggleSearch}>
                <Text style={{ color: "#1D3557", marginLeft: 10 }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

<FlatList
  data={filteredActivities}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        if (isDeleting) {
          toggleSelectActivity(item.id);
        } else if (isEditing) {
          if (!completedActivities.includes(item.id)) {
            handleUpdate(item.id);
          } else {
            Alert.alert("Actividad completada", "No puedes editar una actividad que ya está marcada como completada.");
          }
        } else {
          toggleCompleted(item.id); 
        }
      }}
      style={[
        prioridadStyles.taskCard,
        selectedActivities.includes(item.id) && styles.selectedActivity,
        completedActivities.includes(item.id) && prioridadStyles.taskCardCompleted,
      ]}
    >
      {(isDeleting || isEditing) && (
        <View style={styles.selectionCircle}>
          {selectedActivities.includes(item.id) && <View style={styles.innerCircle} />}
        </View>
      )}

      <View style={prioridadStyles.taskHeader}>
        <View style={prioridadStyles.taskTitleContainer}>
          <View
            style={[
              prioridadStyles.priorityIndicator,
              { backgroundColor: getColorForIndex(index) },
            ]}
          />
          <Text
            style={[
              prioridadStyles.taskTitle,
              completedActivities.includes(item.id) && {
                textDecorationLine: "line-through",
                color: "#8A8A8E",
              },
            ]}
          >
            {item.actividad}
          </Text>
        </View>
        <View style={prioridadStyles.checkButton}>
          {item.prioridad === 1 ? (
            <MaterialCommunityIcons name="pin" size={24} color="#EC0000" />
          ) : (
            <MaterialCommunityIcons
              name={
                completedActivities.includes(item.id)
                  ? "check-circle"
                  : "circle-outline"
              }
              size={24}
              color={
                completedActivities.includes(item.id) ? "#34C759" : "#8A8A8E"
              }
            />
          )}
        </View>
      </View>

      <View style={prioridadStyles.taskFooter}>
        <View style={prioridadStyles.tagContainer}>
          <Text
            style={[
              prioridadStyles.priorityTag,
              { backgroundColor: getColorForIndex(index) },
            ]}
          >
            {item.hora}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )}
  ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
  ListEmptyComponent={<Text style={styles.emptyText}>No hay actividades</Text>}
  contentContainerStyle={{ padding: 16 }}
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
                  style={styles.switch}
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
      </SafeAreaView>
    </MenuProvider>
  );
}