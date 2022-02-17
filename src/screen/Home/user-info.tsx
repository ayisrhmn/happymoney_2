import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import Avatar from '@components/avatar';

import {screenStyles} from './styles';
import {Colors, Helper, Mixins} from '@utils/index';

interface Props {
  navigation: any;
  fullName: string;
}

const UserInfo = (props: Props) => {
  const {navigation, fullName} = props;

  return (
    <View style={screenStyles.userInfo}>
      <View style={screenStyles.welcome}>
        <Text style={screenStyles.welcomeText}>Welcome,</Text>
        <Text style={screenStyles.nameText}>{fullName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeNav', {screen: 'Profile'})}
      >
        <Avatar
          size={Mixins.scaleSize(56)}
          labelSize={Mixins.scaleFont(24)}
          label={Helper.getInitialName(fullName?.toUpperCase())}
          color={Colors.PRIMARY}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
