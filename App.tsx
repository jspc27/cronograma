import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Prioridad from "./app/Prioridad";
import Sugerencias from "./app/Sugerencias";
import Listado from "./app/Listado";
import HomeScreen from "./app/index"; // Asegúrate de que el nombre del componente sea correcto
import { MenuProvider } from "react-native-popup-menu";

// Definir los tipos de navegación
export type StackParamList = {
  Home: undefined;
  Prioridad: undefined;
  Sugerencias: undefined;
  Listado: { fecha: string };
  index: undefined;
};
const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={HomeScreen} />
          <Stack.Screen name="Prioridad" component={Prioridad} />
          <Stack.Screen name="Sugerencias" component={Sugerencias} />
          <Stack.Screen name="Listado" component={Listado} />
        </Stack.Navigator>
      </MenuProvider>
    </NavigationContainer>
  );
}