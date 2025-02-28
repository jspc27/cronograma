import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/index"; // Asegúrate de que sea la ruta correcta
import Estadisticas from "./app/Estadisticas";
import Sugerencias from "./app/Sugerencias";
import Calendario from "./app/Calendario";

// Definir los tipos de navegación
export type StackParamList = {
  Home: undefined;
  Estadisticas: undefined;
  Sugerencias: undefined;
  Calendario: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Estadisticas" component={Estadisticas} />
        <Stack.Screen name="Sugerencias" component={Sugerencias} />
        <Stack.Screen name="Calendario" component={Calendario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
