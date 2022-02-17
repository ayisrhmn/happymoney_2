import React from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '@screen/Home';
import Analytics from '@screen/Analytics';
import Category from '@screen/Category';
import Transactions from '@screen/Transactions';
import Profile from '@screen/Profile';
import {Colors, Mixins} from '@utils/index';

const Tab = createMaterialBottomTabNavigator();

interface Props {
  navigation: any;
}

const HomeNavigation = (props: Props) => {
  const {navigation} = props;

  React.useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.PRIMARY}
      inactiveColor={Colors.GREY}
      barStyle={styles.barStyle}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons: any = {
            Home: 'home-outline',
            Analytics: 'analytics-outline',
            Category: 'briefcase-outline',
            Transactions: 'md-receipt-outline',
            Profile: 'person-outline',
          };

          return (
            <Icon
              name={icons[route.name]}
              color={color}
              size={Mixins.scaleFont(20)}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: Colors.WHITE,
    borderTopWidth: Mixins.scaleSize(0.7),
    borderTopColor: Colors.GREY,
    borderBottomWidth: Mixins.scaleSize(0.7),
    borderBottomColor: Colors.GREY,
  },
});
