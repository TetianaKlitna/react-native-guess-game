import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Confirm</PrimaryButton>
            <PrimaryButton>Reset</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;