import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    backButton: {
        padding: 10,
        backgroundColor: "#1D3557",
        borderRadius: 5,
    },
    Text: {
        color: "#1D3557",
        fontSize: 16,
        fontWeight: "bold",
        position: "absolute",
        left: "40%",
        transform: [{ translateX: -50 }],
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    menuText: {
        fontSize: 16,
        padding: 10,
      }
      
});

export default styles;
