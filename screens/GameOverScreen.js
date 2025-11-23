import { Image, View, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen() {
    return (
        <View style={styles.container}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/img/success.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.textSummary}>
                Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.
            </Text>
            <PrimaryButton onPress={() => { }}>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary600,
        margin: 36,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textSummary: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});

export default GameOverScreen;