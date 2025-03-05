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
    },
    activityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 15,
      },
      
      timeBadge: {
        backgroundColor: "#6A5ACD", // Un color similar al de la imagen
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 10,
      },
      
      timeText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
      },
      
      activityText: {
        color: "#1D3557",
        fontSize: 16,
      },
      separator: {
        height: 1,
        backgroundColor: "#D3D3D3", // Un gris suave
        marginVertical: 8,
        width: "90%", // Para que no ocupe todo el ancho y se vea más elegante
        alignSelf: "center",
      },
});

export default styles;
