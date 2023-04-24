import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Container,
  ListItem,
  NativeBaseProvider,
  CheckBox,
  Body,
  Right,
} from 'native-base';
import Animated from 'react-native-reanimated';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title, price, id}) => {
  //const dispatch = useDispatch();
  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      
      

        <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
          {title}
        </Text>

        <Text
          style={{
            //fontFamily: 'Lato-Bold',
            fontSize: 14,
            fontWeight: '400',
            color: true ? '#009BFC' : '#ff4500',
          }}>
          30000
        </Text>
     
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <LinearGradient
          colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
          style={{...styles.Box}}>
          <View style={{width: '70%', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                fontWeight: '600',
              }}>
              Current Balance
            </Text>
            <Text
              style={{
                fontSize: 32,
                color: '#fff',
                fontWeight: '700',
              }}>
              ₹ 30,000
            </Text>
            <Text
              style={{
                marginTop: 67,
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
              }}>
              3727 **** **** 4596
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              width: '30%',
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
              INR
            </Text>
            <View style={{flex: 1}}>
              <Button
                light
                style={{
                  width: '90%',
                  borderRadius: 20,
                  padding: 15,
                  marginTop: 32,
                  borderWidth: 3,
                  borderColor: '#fff',
                  backgroundColor: '#E10C62',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Add');
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Add
                </Text>
              </Button>

              <Text
                style={{
                  marginTop: 17,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '700',
                  bottom: 10,
                }}>
                Expense
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '700',
                  bottom: 10,
                }}>
                -₹
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} id={item.id} price={item.price} />
        )}
        //use map
        keyExtractor={item => item.id.toString()}
      />
    </Container>
    // </NativeBaseProvider>
  );
};

const hello = StyleSheet.create({
  item: {
    flex: 1,
  },
  item2: {
    alignItems: 'center',
    marginTop: 430,
    marginLeft: 100,
  },
});

const styles = StyleSheet.create({
  Box: {
    width: '125%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default HomeScreen;
