import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FBFF",
  },
  title: {
    fontSize: 32,
    color: "#1D3557",
  },
  
  // Footer
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 }, 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, 
    height: 60,
  },
  
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  footerIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1D3557",
    alignItems: "center",
    justifyContent: "center",
  },

  footerButtonHome: {
    marginTop: -25, 
  },

  footerIconContainerHome: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#1D3557",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },

  // Contenido
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 70, 
  },
  
  // Calendario
  calendarWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
  },
  
  container2: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 2,
    paddingHorizontal: 3,
    width: "100%",
  },

  headerC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 3,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D3557",
    textTransform: "capitalize",
  },
  
  flecha: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1D3557",
  },
  
  arrowButton: {
    padding: 6,
  },
  
  diasSemana: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
    marginBottom: 3,
  },
  
  diaSemana: {
    fontSize: 14,
    fontWeight: "600",
    width: 30,
    textAlign: "center",
    color: "#1D3557",
  },
  
  semanaRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 4,
  },
  
  dia: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 20,
    margin: 1,
  },
  
  diaActual: {
    backgroundColor: "#1D3557",
    shadowColor: "#00A8CC",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  
  textoDia: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1D3557",
  },
  
  textoDiaActual: {
    color: "#fff",
  },
  
  // Estilos para los gráficos
  chartsContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  pieChartsRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },

  pieChartContainer: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20, // Aplica un borde general suave
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 10,
    marginBottom: -10, // Ajusta la posición respecto al footer
    borderTopLeftRadius: 10, // Esquina superior izquierda
    borderTopRightRadius: 10, // Esquina superior derecha
    borderBottomLeftRadius: 10, // Mantener sin curvatura
    borderBottomRightRadius: 30, // Solo curva en la esquina donde está el botón central
  },
  
  pieChartContainerLeft: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20, // Aplica un borde general suave
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 10,
    marginBottom: -10, // Ajusta la posición respecto al footer
    borderTopLeftRadius: 10, // Esquina superior izquierda
    borderTopRightRadius: 10, // Esquina superior derecha
    borderBottomLeftRadius: 30, // Mantener sin curvatura
    borderBottomRightRadius: 10, // Solo curva en la esquina donde está el botón central
  },
  
  barChartContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 0,
  },
  pieChartsWrapper: {
    width: '100%',  // Misma anchura que la gráfica de barras
    alignItems: 'center', // Centra el contenido dentro del contenedor
    paddingVertical: 5,
  },
  
  
  barChart: {
    marginVertical: 0,
    borderRadius: 16,
  },
  
  barChartTitle: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
    color: '#1D3557',
    paddingTop: 0,
  },
});

export default styles;