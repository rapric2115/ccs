import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';


import Balance from '../components/balance';
import PayButton from '../components/payButton';


const WIDTH = Dimensions.get('screen').width;

const Payment = () => {
    const [totalScholarship, setTotalScholarship ] = useState(7,500.00);
    const [monthlyPayment, setMonthlyPayment ] = useState('1,500.00');

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: `Total Scholarship - US$ ${totalScholarship}`,
            value: 'option1',
            description: `Total scholarship get 10% US$ ${totalScholarship - (totalScholarship * .1)}`
        },
        {
            id: '2',
            label: `Monthly Payment - US$ ${monthlyPayment}`,
            value: 'option2',
            description: `Total amount for months US$ ${monthlyPayment}`
        },
        {
            id: '3',
            label: `Credit to Payment`,
            value: 'option2',
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

    return (
        <View style={styles.container}>
            <Balance balance='1.500.00' />
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setSelectedId}
                selectedId={selectedId}
                containerStyle = {styles.containerStyle}
                labelStyle = {styles.label}
                descriptionStyle = {styles.description}
            />
          
            <PayButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerStyle: {
        width: WIDTH * .9,
        backgroundColor: '#d9d9d9',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 10
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        color: 'green'
    }
});

export default Payment;