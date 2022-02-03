import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import container from '@components/container';
import Input from '@components/input';
import Button from '@components/button';
import {Mixins} from '@utils/index';

import {screenStyles} from './styles';

const Layout = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);

  return (
    <View style={screenStyles.container}>
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
        // error={errors.password}
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
            onPress={() => console.log('sign in pressed!')}
          >
            Sign In
          </Button>
        </View>
        <View style={screenStyles.textActionWrapper}>
          <Text style={screenStyles.textAction}>Don't have account? </Text>
          <TouchableOpacity onPress={() => console.log('sign up pressed!')}>
            <Text style={screenStyles.linkSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default container(Layout, false);
