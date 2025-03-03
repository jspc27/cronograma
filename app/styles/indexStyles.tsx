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
    backgroundColor: "#FDE2E8",
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30, 
  },

  box2: {
    width: "95%",
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  box3: {
    width: "95%",
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 16,
    color: "#1D3557",
    flex: 1, 
    textAlign: "left",
    marginRight: -24,
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
    width: "35%",
    height: undefined,
    aspectRatio: 1.0,
    marginBottom: 10,
    borderRadius: 30,
  },

  //scroll
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 50, // Agrega espacio al final para evitar que el último elemento quede pegado
  },
  calendarContainer: {
    width: "100%",
    alignItems: "center",
  },
  



  // Calendario
  header1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
    paddingHorizontal: 20,
  },

  container2: {
    flex: 1,
    backgroundColor: "#FCE9ED",
    borderRadius: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    textTransform: "capitalize",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  flecha: {
    fontSize: 35,
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
    width: 48,
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

export default styles;