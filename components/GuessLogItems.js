import { StyleSheet, Text, View } from "react-native";

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent guess: {guess}</Text>
    </View>
  );
}
export default GuessLogItems;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "white",
    backgroundColor: "#D2B4DE",
    borderRadius: 24,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
