import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    padding: 16,
    backgroundColor: "#641E16",
    marginTop: 36,
    marginHorizontal: 8,
    borderRadius: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
  },
});