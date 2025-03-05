import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "11%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
        backgroundColor: "#fff",
        padding: 20,
      },
    Text: {
        color: "#1D3557",
        fontSize: 16,
        paddingHorizontal: 50,
        paddingVertical: 5,
        fontWeight: "bold",
      },
      backButton: {
        padding: 10,
        backgroundColor: "#1D3557",
        borderRadius: 30,
        marginRight: -10,
      },
});

export default styles;