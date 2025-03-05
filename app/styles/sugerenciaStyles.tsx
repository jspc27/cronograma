import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    height: 260, // Ajusta la altura según sea necesario
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
  Text: {
    color: "#1D3557",
    fontSize: 15,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  verticalContainer: {
    flexDirection: "column",
    width: "45%",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    backgroundColor: "#F6FBFF",
    padding: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#1D3557",
    borderRadius: 30,
    marginRight: -10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;