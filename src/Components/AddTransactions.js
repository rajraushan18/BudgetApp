import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, NativeBaseProvider, Form, Item, Input} from 'native-base';

import {useDispatch} from 'react-redux'
import { addTransaction } from '../store/actions/transactionActions';

const AddTransactions = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = () => {
        if(!title || !price){
            return alert('All fields are required');
        }
        
        const id = Math.floor(Math.random()*600000);
        
        const newTransaction = {
            id,
            title,
            price: +price,
        };
        dispatch(addTransaction({...newTransaction}));
    };


  return (
    <NativeBaseProvider>
     {/* <Container>
         <Content>
             <Form> */}
                 {/* <Item style={{...styles.item}}> */}
        
                     <Input 
                     style={{...styles.item}} 
                     placeholder='Expense Title'
                     onChangeText={(title) => setTitle(title)}
                     />
                   
                 {/* </Item> */}
                 {/* <Item style={{...styles.item}}> */}
                     <Input 
                     style={{...styles.item}} 
                     placeholder='Expense Price' 
                     keyboardType='number-pad'
                     onChangeText={(price) => setPrice(price)}
                    onSubmitEditing={onSubmit}
                     />
                 {/* </Item> */}
             {/* </Form>
         </Content>
     </Container> */}
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20,
        fontSize: 15,
    }
})

export default AddTransactions;