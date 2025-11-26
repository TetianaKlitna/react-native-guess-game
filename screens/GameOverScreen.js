import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

// const deviceWidth = Dimensions.get('window').width;

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width: deviceWidth } = useWindowDimensions();
    let imageSize = 300;
    if (deviceWidth < 380) {
        imageSize = 150;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        source={require('../assets/img/success.png')}
                        style={styles.image}
                    />
                </View>

                <Text style={styles.textSummary}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1 },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: deviceWidth < 450 ? 150 : 300,
        // height: deviceWidth < 450 ? 150 : 300,
        // borderRadius: deviceWidth < 450 ? 75 : 150,
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