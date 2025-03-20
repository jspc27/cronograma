import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import styles from "./styles/loadingStyles";
type Props = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Text style={styles.text}>PANTALLA DE CARGA</Text>
    </View>
  );
};
export default LoadingScreen;

//por corregir 