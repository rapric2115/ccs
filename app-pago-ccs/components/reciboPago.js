import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


const WIDTH = Dimensions.get('screen').width;

const Receive = ({months, date, confirmation, amount}) => {
    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTCesFJ_9UtXbHzdV5o5Hr2ZJH_bt0cfqn24vazoxOQ&s'}} style={styles.image} />
               
                <View>
                    <Text>Pago {months}</Text>
                    <Text>{date}</Text>
                </View>
               
            </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10}}>
                    <Text>Pago {confirmation}</Text>
                    <Text style={{color: 'green'}}>+US$ {amount}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH * .9,
        marginTop: 20,
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 7
    },
    infoContainer: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginHorizontal: 10,
    }
});

export default Receive;