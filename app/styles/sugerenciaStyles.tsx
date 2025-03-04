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
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  smallBox: {
    width: "45%",
    height: 80,
  },
  mediumBox: {
    width: "45%",
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
  boxTextS: {
    fontSize: 16,
    color: "#1D3557",
    flex: 1,
    textAlign: "left",
  },
});

export default styles;
