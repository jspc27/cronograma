import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6FBFF"
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
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 17,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  verticalContainer: {
    flexDirection: "column",
    width: "45%",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#1D3557",
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#1D3557",
    borderRadius: 5,
    marginRight: -9,
    marginLeft: -3,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;