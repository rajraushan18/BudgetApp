import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Container,
  ListItem,
  NativeBaseProvider,
  Checkbox,
  Body,
  Right,
  ScrollView
} from 'native-base';
import Animated from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Parts/Card'
import Empty from './Parts/Empty';
import {deleteTransaction} from '../store/actions/transactionActions'

const Item = ({title, price, id}) => {
  const dispatch = useDispatch();
  return (
    
    <View
    style={styles.box}
      >
      
      
      <Checkbox 
        color="#ff4500"
        onPress={()=>{
          dispatch(deleteTransaction(id))
        }}
      />
        <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10,  }}>
          {title}
        </Text>

        <Text
          style={{
            //fontFamily: 'Lato-Bold',
            fontSize: 14,
            fontWeight: '400',
            marginLeft: 100,
            alignItems: 'flex-start',
          
            color: price > 0 ? '#009BFC' : '#ff4500',
          }}>
          {price > 0 ? `₹${price}` : `-₹${Math.abs(price)}` }
        </Text>
     
    </View>
    
  );
};

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        
        <Card navigation={navigation}/>
      </Animated.View>
      
      <View style={{marginTop: 300, width: '100%', marginBottom: 50}}>
      {transactions.length > 0 ? (
        <FlatList
        data={transactions}
        renderItem={({item}) => (
            <Item title={item.title} price={item.price} id={item.id} />
        )}
        keyExtractor={item => item.id.toString()}
      />
      ) : (
        <Empty />
      )}
      
      </View>
      
    </Container>
    // </NativeBaseProvider>
  );
};



const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    margin: 5,
    padding: 10
  },
});

export default HomeScreen;
