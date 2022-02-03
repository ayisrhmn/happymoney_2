import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';

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

  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);
  const [confirmPass, setConfirmPass] = React.useState('');
  const [securePass, setSecurePass] = React.useState(true);

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
        <Text style={screenStyles.title}>Hi!</Text>
        <Text style={screenStyles.subtitle}>Create new account</Text>
      </View>

      <Input
        mode="outlined"
        label="Full name"
        placeholder="e.g. John Doe"
        onChangeText={(val: any) => {
          // setValue('fullName', text, {shouldValidate: true});
          setFullName(val);
        }}
        // error={errors.fullName}
      />

      <Input
        mode="outlined"
        label="Email address"
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

      <Input
        mode="outlined"
        label="Confirm password"
        placeholder="Confirm your password"
        type="password"
        secureTextEntry={securePass}
        onSecure={() => setSecurePass(!securePass)}
        onChangeText={(val: any) => {
          // setValue('confirmPass', text, {shouldValidate: true});
          setConfirmPass(val);
        }}
        // error={errors.confirmPass}
      />

      <View style={screenStyles.action}>
        <View style={screenStyles.btnWrapper}>
          <Button
            mode="contained"
            uppercase={false}
            style={{marginBottom: Mixins.scaleSize(20)}}
            onPress={() => navigation.replace('HomeNav')}
          >
            Sign Up
          </Button>
        </View>
        <View style={screenStyles.textActionWrapper}>
          <Text style={screenStyles.textAction}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={screenStyles.linkSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default container(Layout, false);
