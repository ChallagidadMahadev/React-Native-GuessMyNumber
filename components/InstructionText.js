import { StyleSheet, Text } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructiontext, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructiontext: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "yellow",
    marginBottom: 8,
  },
});
