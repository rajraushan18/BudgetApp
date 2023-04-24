import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, NativeBaseProvider, Form, Item, Input} from 'native-base';

const AddTransactions = () => {
  return (
    <NativeBaseProvider>
     {/* <Container>
         <Content>
             <Form> */}
                 {/* <Item style={{...styles.item}}> */}
        
                     <Input style={{...styles.item}} placeholder='Expense Title'></Input>
                   
                 {/* </Item> */}
                 {/* <Item style={{...styles.item}}> */}
                     <Input style={{...styles.item}} placeholder='Expense Price' keyboardType='number-pad'></Input>
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