import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FBFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#1D3557",
    marginBottom: 20,
  },
  activityContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  activityText: {
    fontSize: 16,
    color: "#1D3557",
  },
});

export default styles;