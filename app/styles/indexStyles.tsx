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
    aspectRatio: 1.3,
    backgroundColor: "#aed6f1",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 30,
  },
  boxText: {
    fontSize: 18,
    color: "#1D3557",
    textAlign: "center",
  },

  // Footer
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#F5A9B8",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "#1D3557",
    fontSize: 14,
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
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
    marginBottom: 10,
  },
});

export default styles;