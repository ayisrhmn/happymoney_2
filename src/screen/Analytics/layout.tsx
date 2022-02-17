import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import {useIsFocused} from '@react-navigation/native';
import container from '@components/container';
import {Colors, Mixins} from '@utils/index';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      console.log(`Analytics: ${isFocused}`);
    }

    return () => {};
  }, [navigation, isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>Analytics Screen</Text>
    </View>
  );
};

export default container(Layout);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Mixins.scaleSize(30),
  },
  sampleText: {
    fontSize: Mixins.scaleFont(18),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
  },
});
