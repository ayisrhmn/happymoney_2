import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import {useActions, useAppState} from '@overmind/index';
import {useIsFocused} from '@react-navigation/native';
import container, {ContainerContext} from '@components/container';
import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';
import UserInfo from './user-info';
import OverviewCard from './overview-card';

interface Props {
  navigation: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const ctx = React.useContext(ContainerContext);

  const {getHome} = useActions();
  const {home} = useAppState();

  React.useLayoutEffect(() => {
    ctx.setRefreshCallback({
      func: async () => {
        getHome();
      },
    });

    return () => {};
  }, [navigation]);

  React.useEffect(() => {
    if (isFocused) {
      getHome();
    }

    return () => {};
  }, [navigation, isFocused]);

  return (
    <View style={screenStyles.container}>
      <UserInfo navigation={navigation} fullName={home.user?.fullName} />

      {home.overview !== undefined && (
        <OverviewCard navigation={navigation} data={home.overview} />
      )}

      <View>
        <Text style={styles.recentTitle}>Recent Transactions</Text>
        {home.recentTransactions?.map((item: any, i: number) => (
          <View style={styles.itemTransaction} key={i}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
            </View>

            {item.type === 'income' ? (
              <Text style={styles.itemInValue}>
                {`+ ${Helper.numberWithSeparator(item.value)}`}
              </Text>
            ) : (
              <Text style={styles.itemExValue}>
                {`- ${Helper.numberWithSeparator(item.value)}`}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default container(Layout);

const styles = StyleSheet.create({
  recentTitle: {
    fontSize: Mixins.scaleFont(16),
    color: Colors.TEXT.secondary,
    marginBottom: Mixins.scaleSize(20),
  },
  itemTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(18),
  },
  itemTitle: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
    marginBottom: Mixins.scaleSize(4),
  },
  itemCategory: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
  },
  itemExValue: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.DANGER,
  },
  itemInValue: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.SUCCESS,
  },
});
