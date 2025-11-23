import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 1,
        padding: 12,
        borderColor: Colors.primary500,
        borderRadius: 8,
        backgroundColor: Colors.accent500,
        marginVertical: 8,
        elevation: 4, // android shadow
        shadowColor: 'black', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
});


export default GuessLogItem;