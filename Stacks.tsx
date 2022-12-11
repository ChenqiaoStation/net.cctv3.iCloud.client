import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import * as React from 'react';
import App from './App';
import Debug from '@src/screens/Debug';
import {Home, Writer} from '@src/screens';

export type RootStacksParams = {
  App: undefined;
  Debug: {id: string};
  Home: undefined;
  Writer: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{animation: 'slide_from_right', headerShown: false}}>
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="Debug" component={Debug} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Writer" component={Writer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
