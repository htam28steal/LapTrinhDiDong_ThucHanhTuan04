import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Image} from 'react-native';
import CountNumber from './CountNumber';
import CountThreeEle from './CountThreeEle'
import Tik_Ok from './Tiki_Ok'
import Screen2_c from './2_c'


const Stack = createStackNavigator();
const YourApp = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Screen2_c" >
        <Stack.Screen name="CountNumber" component={CountNumber} />
        <Stack.Screen name="CountThreeEle" component={CountThreeEle} />
         <Stack.Screen name="Tik_Ok" component={Tik_Ok} />
         <Stack.Screen name="Screen2_c" component={Screen2_c} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;