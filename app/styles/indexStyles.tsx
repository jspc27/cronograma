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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10, 
    paddingBottom: 80,
  },

  box2: {
    width: "100%",
    height: 90,
    backgroundColor: "#00A8CC",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  
  boxText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    flex: 1, 
    textAlign: "left",
  },  
  
  libreta: {
    width: "20%",
    height: undefined,
    aspectRatio: 1.0,
    marginLeft: 10,
    borderRadius: 30,
  },

  // Scroll
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 70,
  },
  
  // Calendario
  calendarWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  
  container2: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  headerC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 18,
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
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  
  diaSemana: {
    fontSize: 15,
    fontWeight: "600",
    width: 40,
    textAlign: "center",
    color: "#1D3557",
  },
  
  dia: {
    width: 27,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 20,
  },
  
  textoDia: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1D3557",
  },
  
  // Estilos para los gráficos
  chartsContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  
  pieChartsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  
  pieChartContainer: {
    width: '48%',
    alignItems: 'center',
  },
  
  barChartContainer: {
    marginTop: 2,
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#eee',
  },
  
  barChartTitle: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#1D3557',
  },
  
  // Estilos para las leyendas
  legendContainer: {
    marginTop: 15,
    width: '100%',
  },
  
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  
  legendText: {
    fontSize: 12,
    color: '#555',
  },
});

export default styles;