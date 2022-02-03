import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '@components/header';

import Splash from '@screen/Splash';
import GetStarted from '@screen/GetStarted';
import SignIn from '@screen/SignIn';
import SignUp from '@screen/SignUp';

import HomeNav from 'navigations/home-navigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: '',
          }}
        />

        <Stack.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
