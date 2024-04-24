import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const PayButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.btn}>Realizar Pago</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    btn: {
        width: WIDTH * 0.7,
        backgroundColor: '#6c81ec',
        paddingHorizontal: 15,
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 10,
        borderRadius: 20,
    },
});

export default PayButton;
