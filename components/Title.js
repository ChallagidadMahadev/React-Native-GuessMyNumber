import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.tittle}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  tittle: {
    fontFamily: "open-sans-bold",
    // flex: 1,
    fontSize: 24,
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
