import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderColor: "#F1C40F",
    borderRadius: 8,
    padding: 24,
    margin: 24,
    borderWidth: 4,
    alignItems: "center",
  },
  textContainer: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    // fontWeight: "bold",
    color: "#F1C40F",
  },
});
