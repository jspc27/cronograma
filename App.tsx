import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Estadisticas from "./app/Estadisticas";
import Sugerencias from "./app/Sugerencias";
import Listado from "./app/Listado";
import index from "./app/index";
import { MenuProvider } from "react-native-popup-menu";

// Definir los tipos de navegación
export type StackParamList = {
  Home: undefined;
  Estadisticas: undefined;
  Sugerencias: undefined;
  Calendario: undefined;
  Listado: { fecha: string };
  index: undefined;
};
const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={index} />
          <Stack.Screen name="Estadisticas" component={Estadisticas} />
          <Stack.Screen name="Sugerencias" component={Sugerencias} />
          <Stack.Screen name="Listado" component={Listado} />
        </Stack.Navigator>
      </MenuProvider>
    </NavigationContainer>
  );
}
