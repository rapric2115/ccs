import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

//importing components
import Balance from '../components/balance';
import Receive from '../components/reciboPago';
import PayButton from '../components/payButton';

const Home = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
     fetch('https://dummyjson.com/users')
     .then( res => res.json())
     .then(json => setUser(json));      
    }, [])
    
    // console.log(user.users[0])
    return (
        <View style={styles.container}>
            <Balance balance={'1500.00'} />
            <Receive 
                months="agosto - septiembre"
                date="17 de marzo de 2024"
                confirmation="Realizado"
                amount="1,500.00"
            />
            <Receive 
            months="septiembre - octubre"
            date="17 de abril de 2024"
            confirmation="Realizado"
            amount="1,500.00"
        />
        <PayButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
});

export default Home;