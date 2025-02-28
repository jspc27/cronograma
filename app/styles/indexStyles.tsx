import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#F5A9B8",
  },
  title: {
    fontSize: 32,
    color: "#1D3557",
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  // Ajuste de contenido
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start", // Asegura que los cuadros se posicionen arriba
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30, // Subimos los cuadros más cerca del header
  },
  box: {
    width: "85%",
    aspectRatio: 1.9,
    backgroundColor: "#aed6f1",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 30,
  },

  box2: {
    width: "85%",
    backgroundColor: "#aed6f1",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between", // Distribuir los elementos
    alignItems: "center", // Centrar verticalmente
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 16,
    color: "#1D3557",
    flex: 1, // Permitir que el texto ocupe el espacio disponible
    textAlign: "left", // Alineación a la izquierda
    marginRight: -24, // Separación del botón
  },  

  footerButtonText: {
    color: "#1D3557",
    fontSize: 15,
    marginTop: 5,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  libreta: {
    width: "80%",
    height: undefined,
    aspectRatio: 1.7,
    marginBottom: 10,
  },
});

export default styles;