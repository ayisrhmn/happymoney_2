import React from 'react';
import {Text, View, Image} from 'react-native';

import container from '@components/container';
import images from '@assets/images';

import {screenStyles} from './styles';

interface Props {
  navigation: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;

  const redirectNextScreen = () => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  };

  React.useEffect(() => {
    redirectNextScreen();

    return () => {};
  }, [navigation]);

  return (
    <View style={screenStyles.container}>
      <Image
        source={images.logo}
        style={screenStyles.logo}
        resizeMode="contain"
      />
      <Text style={screenStyles.title}>Happy Money</Text>
      <Text style={screenStyles.tagline}>Income {'&'} Expense Tracker App</Text>
    </View>
  );
};

export default container(Layout, false);
