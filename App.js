import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base'

/* Redux */
import {Provider} from 'react-redux';
import store from './src/store';

/* Components */
import HomeScreen from './src/Components/HomeScreen';
import AddTransactions from './src/Components/AddTransactions';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              title: 'Expense tracker'
            }}
            />
            <Stack.Screen 
            name="Add" 
            component={AddTransactions}
            options={{
              title: 'Add expense'
            }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
