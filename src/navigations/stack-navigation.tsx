import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '@components/header';

import Splash from '@screen/Splash';
import GetStarted from '@screen/GetStarted';
import SignIn from '@screen/SignIn';
import Home from '@screen/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          header: props => <Header {...props} />,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerTitle: '',
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Happy Money v2',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
