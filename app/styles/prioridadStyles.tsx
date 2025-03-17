import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F8FA",
  },
  header: {
    width: "100%",
    height: 60,  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1D3557",
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  filterButton: {
    padding: 8,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskCardCompleted: {
    opacity: 0.7,
    backgroundColor: "#F8F8F8",
  },

emptyText: {
  textAlign: 'center',
  color: '#8A8A8E',
  fontSize: 16,
  marginTop: 40,
  padding: 20,
},
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  priorityIndicator: {
    width: 4,
    height: 24,
    borderRadius: 2,
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#1D3557",
    flex: 1,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: "#8A8A8E",
  },
  checkButton: {
    padding: 4,
  },
  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  tagContainer: {
    flexDirection: 'row',
  },
  priorityTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: "#FFFFFF",
    overflow: 'hidden',
  },
  dateText: {
    fontSize: 12,
    color: "#8A8A8E",
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#1D3557",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});

export default styles;