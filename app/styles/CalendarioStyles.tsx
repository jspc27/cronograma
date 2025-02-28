import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    backgroundColor: "#F5A9B8",
  },
  header1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  
  
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    textTransform: "capitalize",
  },
  flecha: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1D3557",
  },
  diasSemana: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  diaSemana: {
    fontSize: 16,
    fontWeight: "600",
    width: 45,
    textAlign: "center",
    color: "#1D3557",
  },
  dia: {
    width: 35,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 22,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textoDia: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D3557",
  },
});
