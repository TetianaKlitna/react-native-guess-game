import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth < 450 ? 12 : 24,
        marginHorizontal: deviceWidth < 450 ? 12 : 24,
        marginBottom: deviceWidth < 450 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: deviceWidth < 450 ? 28 :36,
        color: 'white',
    },
});

export default NumberContainer;