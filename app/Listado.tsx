import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";
import globalStyles from "../app/styles/indexStyles";
import styles from "./styles/listadoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from "react-native-popup-menu";
import { TimePickerModal } from "react-native-paper-dates";

type ListadoRouteProp = RouteProp<StackParamList, "Listado">;

export default function Listado() {
  const route = useRoute<ListadoRouteProp>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0 });

  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState("");
  const [hora, setHora] = useState("");

  const getColorForActivity = (activity: string) => {
    const colors = ["#28A745", "#FF9800", "#007BFF", "#E91E63", "#FFC107"]; 
    let hash = 0;
    for (let i = 0; i < activity.length; i++) {
      hash = activity.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };

  const handleSave = () => {
    const formattedTime = `${time.hours}:${time.minutes < 10 ? '0' : ''}${time.minutes}`;
    Alert.alert("Actividad guardada", `Actividad: ${activity}\nHora: ${formattedTime}`);
    setModalVisible(false);
    setActivity("");
    setHora("");
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
                <MenuOption onSelect={() => Alert.alert('Option 1')} text='Option 1' />
                <MenuOption onSelect={() => Alert.alert('Option 2')} text='Option 2' />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View style={styles.activityContainer}>
          <View style={[styles.timeBadge, { backgroundColor: getColorForActivity("Pasear a sacar el perro") }]}>
            <Text style={styles.timeText}>8:00 AM</Text>
          </View>
          <Text style={styles.activityText}>Pasear a sacar el perro</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.activityContainer}>
          <View style={[styles.timeBadge, { backgroundColor: getColorForActivity("Reunión de trabajo") }]}>
            <Text style={styles.timeText}>10:00 AM</Text>
          </View>
          <Text style={styles.activityText}>Reunión de trabajo</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.activityContainer}>
          <View style={[styles.timeBadge, { backgroundColor: getColorForActivity("Almuerzo con amigos") }]}>
            <Text style={styles.timeText}>1:00 PM</Text>
          </View>
          <Text style={styles.activityText}>Almuerzo con amigos</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.activityContainer}>
          <View style={[styles.timeBadge, { backgroundColor: getColorForActivity("Gimnasio") }]}>
            <Text style={styles.timeText}>6:00 PM</Text>
          </View>
          <Text style={styles.activityText}>Gimnasio</Text>
        </View>
      </SafeAreaView>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
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
              <Text style={styles.modalTitle2}>
                {hora ? hora : "Seleccionar Hora"}
              </Text>
            </TouchableOpacity>
            <TimePickerModal
              visible={visible}
              onDismiss={() => setVisible(false)}
              onConfirm={(output) => {
                setTime(output);
                const formattedTime = `${output.hours}:${output.minutes < 10 ? '0' : ''}${output.minutes}`;
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