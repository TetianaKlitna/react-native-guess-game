import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f', '#72063c']} style={styles.rootScreen}>
      <StatusBar style="auto" />
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});
