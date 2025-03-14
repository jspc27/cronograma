import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6FBFF"
  },
  verticalContainer: {
    flexDirection: "column",
    width: "45%",
    justifyContent: "space-between",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  header: {
    width: "100%",
    height: 60,  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1D3557",
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  backButton: {
    padding: 8,
    marginRight: 10, // Espacio entre el botón y el texto
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1, // Permite centrar el texto dentro del header
    textAlign: "center",
  },
  box: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallBox: {
    width: "110%",
    height: 120,
  },
  smallBox1: {
    width: "45%",
    height: 120,
  },
  largeBoxVertical: {
    width: "45%",
    height: 260, 
  },
  mediumBox: {
    width: "50%",
    height: 120,
  },
  largeBox: {
    width: "100%",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;