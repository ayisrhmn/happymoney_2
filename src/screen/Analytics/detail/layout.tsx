import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {useActions, useAppState} from '@overmind/index';
import container from '@components/container';
import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;

  const {getAnalyticsDetail} = useActions();
  const {analyticsDetail} = useAppState();

  React.useEffect(() => {
    getAnalyticsDetail();

    return () => {};
  }, [navigation]);

  const renderItem = ({item}: any) => (
    <View style={screenStyles.card}>
      <View style={screenStyles.itemTransaction}>
        <View>
          <Text style={screenStyles.itemTitle}>{item.title}</Text>
          <View
            style={{
              ...screenStyles.row,
              marginBottom: Mixins.scaleSize(4),
            }}
          >
            <Icon
              name="briefcase-outline"
              size={Mixins.scaleFont(18)}
              color={Colors.TEXT.secondary}
            />
            <Text style={screenStyles.itemContent}>{item.category}</Text>
          </View>
          <View style={screenStyles.row}>
            <Icon
              name="time-outline"
              size={Mixins.scaleFont(18)}
              color={Colors.TEXT.secondary}
            />
            <Text style={screenStyles.itemContent}>{item.inputDate}</Text>
          </View>
        </View>

        {item.type === 'income' ? (
          <Text style={screenStyles.itemInValue}>
            {`+ ${Helper.numberWithSeparator(item.value)}`}
          </Text>
        ) : (
          <Text style={screenStyles.itemExValue}>
            {`- ${Helper.numberWithSeparator(item.value)}`}
          </Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.sectionWrapper}>
        <FlatList
          data={analyticsDetail}
          renderItem={renderItem}
          keyExtractor={(item: any, i: number) => `${item.title}_${i}`}
        />
      </View>
    </View>
  );
};

export default container(Layout, false);
