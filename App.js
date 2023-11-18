import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import StartGameScreen from "./screens/StartGameScreen";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// SplashScreen.preventAutoHideAsync().catch((err) => console.log(err));

export default function App() {
  const [guessRounds, setGuessRounds] = useState(0);
  const [pickNumber, setPickNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  // useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    //shlud be return <AppLoading />
    return;
  }
  function onPickNumberHandler(userNumber) {
    setPickNumber(userNumber);
    setIsGameOver(false);
  }
  function gameOverHandler(noOfRounds) {
    setIsGameOver(true);
    setGuessRounds(noOfRounds)
  }
  function startNewGameHandler() {
    setPickNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={onPickNumberHandler} />;
  if (pickNumber) {
    screen = (
      <GameScreen usernumber={pickNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && pickNumber) {
    screen = (
      <GameOver
        userNumber={pickNumber}
        onStartNewGame={startNewGameHandler}
        rounds={guessRounds}
      />
    );
  }
  return (
    <LinearGradient colors={["#7D3C98", "#FFDE76"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
