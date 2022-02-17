import React from 'react';
import {View} from 'react-native';

import {useActions, useAppState} from '@overmind/index';
import {useIsFocused} from '@react-navigation/native';
import container, {ContainerContext} from '@components/container';

import {screenStyles} from './styles';
import UserInfo from './user-info';
import OverviewCard from './overview-card';
import RecentTransactions from './recent-transactions';

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
      <OverviewCard navigation={navigation} data={home.overview} />
      <RecentTransactions data={home.recentTransactions} />
    </View>
  );
};

export default container(Layout);
