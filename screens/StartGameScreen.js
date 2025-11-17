import {
    TextInput,
    View,
    StyleSheet,
    Platform,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#b44c80ff',
        borderRadius: 8,
        //android shadow
        elevation: 4,
        //ios shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        margin: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnContainer:{
        flex: 1,
    }
});

export default StartGameScreen;