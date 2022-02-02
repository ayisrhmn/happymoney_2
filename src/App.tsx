/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider as StoreProvider} from 'overmind-react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';
import FlashMessage from 'react-native-flash-message';

import {store} from '@overmind/index';
import {Colors} from '@utils/index';
import StackNavigation from '@navigations/stack-navigation';

import moment from 'moment';
import 'moment/locale/en-gb';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.PRIMARY.darkBlue,
    },
  };
  
  moment.locale('en');

  return (
    <StoreProvider value={store}>
      <PaperProvider theme={theme}>
        {__DEV__ && (
          <View style={s.badge}>
            <Text style={s.badgeText}>DEV</Text>
          </View>
        )}
        <StackNavigation />
        <FlashMessage position="top" duration={3000} />
      </PaperProvider>
    </StoreProvider>
  );
};

const s = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    zIndex: 3,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    opacity: 0.7,
  },
  badgeText: {
    fontSize: 8,
    color: 'white',
  },
});

export default App;
