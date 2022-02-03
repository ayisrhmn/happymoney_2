import React from 'react';
import {Text, View, Image} from 'react-native';

import container from '@components/container';
import Button from '@components/button';
import {Mixins} from '@utils/index';
import images from '@assets/images';

import {screenStyles} from './styles';

interface Props {
  navigation: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={screenStyles.container}>
      <Image
        source={images.logo}
        style={screenStyles.logo}
        resizeMode="contain"
      />
      <Text style={screenStyles.greeting}>Hello!</Text>
      <Text style={screenStyles.subtitle}>
        This is best app for income{'\n'}and expense tracker your balance
      </Text>
      <Button
        mode="contained"
        uppercase={false}
        style={{marginBottom: Mixins.scaleSize(16)}}
        onPress={() => navigation.navigate('SignIn')}
      >
        Sign In
      </Button>
      <Button
        mode="outlined"
        uppercase={false}
        onPress={() => navigation.navigate('SignUp')}
      >
        Sign Up
      </Button>
    </View>
  );
};

export default container(Layout, false);
