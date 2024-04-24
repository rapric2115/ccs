import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const WIDTH = Dimensions.get('screen').width;


const Balance = ({balance}) => {
    return (
        <View style={styles.container}>
            <View>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTCesFJ_9UtXbHzdV5o5Hr2ZJH_bt0cfqn24vazoxOQ&s'}} style={styles.image} />
            {/* <Image source={require('')} /> */}
            </View>
            <View>
                <Text style={styles.textBalance}>${balance}</Text>
                <Text style={styles.text}>Balance Pendiente</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    textBalance: {
        fontSize: 20,
        fontWeight: '700'
    },
    text: {
        fontSize: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 10
    }
});

export default Balance;