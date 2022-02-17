import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';
import moment from 'moment';
import images from 'assets/images';

interface Props {
  navigation?: any;
  data: any;
}

const RecentTransactions = (props: Props) => {
  const {data} = props;

  const cardContent = (item: any) => (
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
  );

  return (
    <View style={screenStyles.sectionWrapper}>
      <Text style={screenStyles.recentTitle}>Recent Transactions</Text>
      {data?.length !== 0 ? (
        <>
          {data?.map((item: any, i: number) => (
            <View style={screenStyles.card} key={i}>
              {cardContent(item)}
            </View>
          ))}
        </>
      ) : (
        <View style={screenStyles.emptyWrapper}>
          <Image
            source={images.empty}
            style={screenStyles.empty}
            resizeMode="contain"
          />
          <Text style={screenStyles.emptyLabel}>No transaction data</Text>
        </View>
      )}
    </View>
  );
};

export default RecentTransactions;
