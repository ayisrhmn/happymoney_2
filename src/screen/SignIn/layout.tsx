import React from 'react';
import {TouchableOpacity, View, ScrollView, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';

import container from '@components/container';
import Input from '@components/input';
import Button from '@components/button';
import {Mixins} from '@utils/index';

import {screenStyles} from './styles';

interface Props {
  navigation: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);

  React.useEffect(() => {
    const backAction = () => {
      navigation.navigate('GetStarted');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <ScrollView style={screenStyles.container}>
      <View style={screenStyles.headerWrapper}>
        <Text style={screenStyles.title}>Welcome!</Text>
        <Text style={screenStyles.subtitle}>Sign in to continue</Text>
      </View>

      <Input
        mode="outlined"
        label="Email Address"
        placeholder="e.g. youremail@happymoney.com"
        onChangeText={(val: any) => {
          // setValue('email', text, {shouldValidate: true});
          setEmail(val);
        }}
        // error={errors.email}
      />

      <Input
        mode="outlined"
        label="Password"
        placeholder="Type your password"
        type="password"
        secureTextEntry={secure}
        onSecure={() => setSecure(!secure)}
        onChangeText={(val: any) => {
          // setValue('password', text, {shouldValidate: true});
          setPassword(val);
        }}
        // error={errors.password}
      />

      <View style={screenStyles.action}>
        <View style={screenStyles.btnWrapper}>
          <Button
            mode="contained"
            uppercase={false}
            style={{marginBottom: Mixins.scaleSize(20)}}
            onPress={() => navigation.replace('HomeNav')}
          >
            Sign In
          </Button>
        </View>
        <View style={screenStyles.textActionWrapper}>
          <Text style={screenStyles.textAction}>Don't have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={screenStyles.linkSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default container(Layout, false);
