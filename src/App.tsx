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
import FlashMessage from 'react-native-flash-message';

import {store} from '@overmind/index';
import {Colors} from '@utils/index';
import StackNavigation from '@navigations/stack-navigation';

import moment from 'moment';
import 'moment/locale/en-gb';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.PRIMARY.darkBlue,
    },
  };
  
  moment.locale('en');

  return (
    <StoreProvider value={store}>
      <PaperProvider theme={theme}>
        <StackNavigation />
        <FlashMessage position="top" duration={3000} />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
