import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {useActions, useAppState} from '@overmind/index';
import {useIsFocused} from '@react-navigation/native';
import container, {ContainerContext} from '@components/container';
import Avatar from '@components/avatar';
import {Colors, Helper, Mixins, Typography} from '@utils/index';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const ctx = React.useContext(ContainerContext);

  const {getUserInfo} = useActions();
  const {userInfo} = useAppState();

  React.useLayoutEffect(() => {
    ctx.setRefreshCallback({
      func: async () => {
        getUserInfo();
      },
    });

    return () => {};
  }, [navigation]);

  React.useEffect(() => {
    if (isFocused) {
      getUserInfo();
    }

    return () => {};
  }, [navigation, isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.nameText}>{userInfo?.fullName}</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('go to profile page!')}>
          <Avatar
            size={Mixins.scaleSize(56)}
            labelSize={Mixins.scaleFont(24)}
            label={Helper.getInitialName(userInfo?.fullName?.toUpperCase())}
            color={Colors.PRIMARY.darkBlue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default container(Layout);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(30),
  },
  loader: {
    height: Mixins.WINDOW_HEIGHT - Mixins.scaleSize(50),
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Mixins.scaleSize(30),
  },
  welcome: {
    justifyContent: 'center',
  },
  welcomeText: Typography.textStyle('secondary', 'regular', 14, {
    marginBottom: Mixins.scaleSize(6),
  }),
  nameText: Typography.textStyle('primary', 'bold', 16),
});
