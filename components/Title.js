import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary500,
        textAlign: 'center',
        marginBottom: 24,
        borderWidth: 2,
        borderColor: Colors.primary500,
        padding: 12,
    }
});

export default Title;