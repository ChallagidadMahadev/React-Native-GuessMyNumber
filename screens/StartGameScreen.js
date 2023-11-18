import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredText, setEnteredText] = useState("");
  function onEnterTextHandler(userNum) {
    setEnteredText(userNum);
  }
  function inputNumberReset() {
    setEnteredText("");
  }
  function onConfirmHandler() {
    const userNum = parseInt(enteredText);

    if (isNaN(userNum) || userNum < 0 || userNum > 99) {
      console.log("Invalid", userNum);
      Alert.alert("Invalid Number", "Input value should be >0 and <99 !!!", [
        { text: "Okay", style: "destructive", onPress: inputNumberReset },
      ]);
      return;
    }
    console.log("valid", userNum);
    onPickNumber(userNum);
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={onEnterTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={inputNumberReset}>Reset</PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={onConfirmHandler}>Confirm</PrimaryButtons>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    marginTop: 100,
    alignItems: "center",
  },

  textInput: {
    width: 50,
    height: 50,
    color: "yellow",
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
