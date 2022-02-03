import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Mixins} from '@utils/index';
import {useActions, useAppState} from '@overmind/index';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;

  const {welcome} = useAppState();
  const {getWelcome} = useActions();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getWelcome();

    return () => {};
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Icon name="person" style={styles.sampleIcon} />
      <Text style={styles.sampleText}>{welcome}</Text>
      <Text style={styles.sampleText}>{count}</Text>
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
