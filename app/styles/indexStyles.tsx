import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FBFF",
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

  //footer
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 }, 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, 
  },
  

footerButton: {
  alignItems: "center",
  justifyContent: "center",
},

footerIconContainer: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: "#1D3557",
  alignItems: "center",
  justifyContent: "center",
},

footerButtonHome: {
  marginTop: -20, 
},

footerIconContainerHome: {
  width: 65,
  height: 65,
  borderRadius: 32.5,
  backgroundColor: "#1D3557",
  alignItems: "center",
  justifyContent: "center",
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
    width: "100%",
    height: "12%",
    backgroundColor:"#1D3557",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  

  boxText: {
    fontSize: 16,
    color: "#fff",
    flex: 1, 
    textAlign: "left",
  },  

 
  

  libreta: {
    width: "20%",
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
  headerC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
    paddingHorizontal: 20,
  },

  calendarWrapper: {
  width: "100%",
  alignItems: "center",
  marginBottom: 20,
},
container2: {
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: 20,
  elevation: 5,
  paddingVertical: 10,
  alignItems: "center",
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
    width: "100%",
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
    width: "13%",
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    elevation: 3,
    borderRadius: 5,
  },
  textoDia: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D3557",
  },
});

export default styles;