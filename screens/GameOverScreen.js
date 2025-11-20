import { Text, View, StyleSheet } from 'react-native';

function GameOverScreen(){
    return (
        <View style={styles.container}>
            <Text>Game Over!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;