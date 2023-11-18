import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButtons from "../components/PrimaryButtons";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItems from "../components/GuessLogItems";

function generateRandomNumberBetween(min, max, exclude) {
  const randnum = Math.floor(Math.random() * (max - min)) + min;
  if (randnum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randnum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ usernumber, onGameOver }) {
  const initialNumber = generateRandomNumberBetween(1, 100, usernumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  const [guessRound, setGuessRound] = useState([]);
  useEffect(() => {
    if (currentGuess === usernumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, usernumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < usernumber) ||
      (direction === "higher" && currentGuess > usernumber)
    ) {
      Alert.alert("Dont Lie.", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((prevValue) => [newRndNumber, ...prevValue]);
  }
  const listLength = guessRound.length;
  return (
    <View style={styles.gameScreen}>
      <Title>Opponent GUESS</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButtons>
          </View>
        </View>
      </Card>
      <View style={styles.listcontainer}>
        {/* {guessRound.map((round) => (
          <Text key={round}>{round}</Text>
        ))} */}
        <FlatList
          data={guessRound}
          renderItem={(itemData) => (
            <GuessLogItems
              roundNumber={listLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    padding: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  listcontainer: {
    // flex: 1,
    padding: 16,
    height: 400,
  },
});
