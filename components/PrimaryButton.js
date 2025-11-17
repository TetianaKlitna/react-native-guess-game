import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler() { };
    return (
        <View style={styles.btnContainerOuter}>
            <Pressable
                onPress={pressHandler}
                style={({ pressed }) => [
                    styles.btnContainerInner,
                    pressed && styles.pressed,
                ]}>
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainerOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    btnContainerInner: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 8, // android shadow
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});

export default PrimaryButton;