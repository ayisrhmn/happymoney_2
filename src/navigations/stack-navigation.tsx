import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '@components/header';

import Splash from '@screen/Splash';
import GetStarted from '@screen/GetStarted';
import SignIn from '@screen/SignIn';
import SignUp from '@screen/SignUp';

import HomeNav from '@navigations/home-navigation';

import AnalyticsDetail from '@screen/Analytics/detail';
import AnalyticsListCategory from '@screen/Analytics/list-category';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          header: props => <Header {...props} />,
          animation: 'fade',
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

        <Stack.Screen
          name="AnalyticsDetail"
          component={AnalyticsDetail}
          options={{
            headerTitle: 'Analytics Detail',
          }}
        />

        <Stack.Screen
          name="AnalyticsListCategory"
          component={AnalyticsListCategory}
          options={{
            headerTitle: 'List Category',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
