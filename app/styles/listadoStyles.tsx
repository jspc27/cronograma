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
    backgroundColor: "#00A8CC",
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
    backgroundColor: "#6A5ACD", 
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
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
    backgroundColor: "#D3D3D3",
    marginVertical: 8,
    width: "95%",
    alignSelf: "center",
  },
  
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#00A8CC",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
  },
  modalTitle2:{
    fontSize: 16,
    color: "#1D3557",
    alignItems: "center",
  },
  hora:{
    marginTop: 11,
    backgroundColor: "#EAEDED",
    borderRadius: 20,
    padding: 10,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 5,
    width: "60%",
  },
  priorityButton: {
    backgroundColor: "#1D3557",
    borderRadius: 20,
    padding: 10,
  },
  priorityButtonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "100%",
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#00A8CC",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    marginLeft: 5,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  cancelButton: {
    backgroundColor: "#1D3557",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    marginRight: 5,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  timePickerButton: {
    backgroundColor: "#E9C46A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  
  timePickerText: {
    color: "#264653",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});

export default styles;