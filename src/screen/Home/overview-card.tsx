import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import IconFas from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';

import {useActions, useAppState} from '@overmind/index';
import OverviewBar from '@components/overview-bar';
import Button from '@components/button';
import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';

interface Props {
  navigation?: any;
  data: any;
}

const OverviewCard = (props: Props) => {
  const {data} = props;

  const {datePickerShow} = useActions();
  const {displayDate} = useAppState();

  return (
    <View style={screenStyles.sectionWrapper}>
      <View style={screenStyles.card}>
        <View style={screenStyles.cardHeader}>
          <Text style={screenStyles.overviewText}>Overview</Text>
          <TouchableOpacity
            onPress={() => datePickerShow(true)}
            style={{flexDirection: 'row'}}
          >
            <IconIon
              name="time-outline"
              size={Mixins.scaleFont(18)}
              color={Colors.TEXT.secondary}
            />
            <Text style={screenStyles.dateText}>{displayDate}</Text>
          </TouchableOpacity>
        </View>

        <OverviewBar
          exPercentage={data?.exPercentage}
          inPercentage={data?.inPercentage}
          exValue={data?.exValue}
          inValue={data?.inValue}
          containerStyle={{
            marginBottom: Mixins.scaleSize(30),
          }}
        />

        <View style={screenStyles.balanceWrapper}>
          <View>
            <Text style={screenStyles.balanceText}>Balance</Text>
            <Text style={screenStyles.balanceValue}>
              {Helper.numberWithSeparator(data?.balance)}
            </Text>
          </View>
          <Button
            mode="contained"
            uppercase={false}
            style={screenStyles.btnAddTransaction}
            onPress={() => console.log('add transactions pressed!')}
          >
            <IconFas
              name="plus"
              size={Mixins.scaleFont(20)}
              color={Colors.WHITE}
            />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default OverviewCard;
