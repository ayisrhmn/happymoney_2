import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';

import container from '@components/container';
import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';

interface Props {
  navigation?: any;
  route?: any;
}

const Layout = (props: Props) => {
  const {route} = props;

  const analyticsListCategory = route?.params;

  const renderItem = ({item, index}: any) => (
    <View
      style={
        index === 0
          ? {...screenStyles.sectionCard, marginTop: Mixins.scaleSize(14)}
          : screenStyles.sectionCard
      }
    >
      <View
        style={
          index >= 5
            ? screenStyles.card
            : {
                ...screenStyles.card,
                backgroundColor:
                  analyticsListCategory.type === 'expense'
                    ? Colors.DANGER
                    : Colors.SUCCESS,
              }
        }
      >
        <View style={screenStyles.itemTransaction}>
          <Text
            style={
              index >= 5
                ? screenStyles.itemTitle
                : {...screenStyles.itemTitle, color: Colors.WHITE}
            }
          >
            {`${index + 1}. ${item.category}`}
          </Text>

          {analyticsListCategory.type === 'expense' ? (
            <Text
              style={
                index >= 5
                  ? screenStyles.itemExValue
                  : {...screenStyles.itemExValue, color: Colors.WHITE}
              }
            >
              {`- ${Helper.numberWithSeparator(item.value)}`}
            </Text>
          ) : (
            <Text
              style={
                index >= 5
                  ? screenStyles.itemInValue
                  : {...screenStyles.itemInValue, color: Colors.WHITE}
              }
            >
              {`+ ${Helper.numberWithSeparator(item.value)}`}
            </Text>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={analyticsListCategory.data}
      renderItem={renderItem}
      keyExtractor={(item: any, i: number) => `${item.title}_${i}`}
    />
  );
};

export default container(Layout, false);
