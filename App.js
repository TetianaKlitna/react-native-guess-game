import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {  useFonts } from 'expo-font';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [ fontsLoaded ]  = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient colors={[Colors.accent500, Colors.primary500]} style={styles.rootScreen}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('./assets/img/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView edges={['top', 'bottom']} style={styles.rootScreen}>
          {screen}
        </SafeAreaView >
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  }
});
