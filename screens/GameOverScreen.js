import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButtons from "../components/PrimaryButtons";

function GameOver({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game GameOver</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess my number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButtons onPress={onStartNewGame}>Start new Game</PrimaryButtons>
    </View>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 200,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "purple",
  },
});
