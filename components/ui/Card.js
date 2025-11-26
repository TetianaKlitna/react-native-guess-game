import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        //marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        //android shadow
        elevation: 4,
        //ios shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});

export default Card;