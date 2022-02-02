import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Mixins} from '@utils/index';
import {useActions, useAppState} from '@overmind/index';

const Layout = () => {
  const {welcome} = useAppState();
  const {getWelcome} = useActions();

  React.useEffect(() => {
    getWelcome();

    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="person" style={styles.sampleIcon} />
      <Text style={styles.sampleText}>{welcome}</Text>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Mixins.scaleSize(14),
  },
  sampleIcon: {
    fontSize: Mixins.scaleFont(32),
    marginRight: Mixins.scaleSize(8),
  },
  sampleText: {
    fontSize: Mixins.scaleFont(20),
    fontWeight: 'bold',
    color: Colors.PRIMARY.darkBlue,
    textAlignVertical: 'center',
  },
});
