import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import IconFas from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-modern-datepicker';

import OverviewBar from '@components/overview-bar';
import Button from '@components/button';
import Modal from '@components/modal';

import moment from 'moment';
import {screenStyles} from './styles';
import {Colors, Helper, Mixins, Typography} from '@utils/index';

interface Props {
  navigation?: any;
  data: any;
}

const OverviewCard = (props: Props) => {
  const {navigation, data} = props;

  const [date, setDate] = React.useState(new Date());
  const [displayDate, setDisplayDate] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState(
    moment().format('YYYY/MM'),
  );
  const [isDatePickerShow, setDatePickerShow] = React.useState(false);

  const handleConfirm = (date: any) => {
    setSelectedMonth(date.replace(' ', '/'));
    const DateString2Date = new Date(date.replace(' ', '-') + '-01');
    const displayDateFormat = moment(DateString2Date)
      .locale('en')
      .format('MMM YYYY');
    setDisplayDate(displayDateFormat);
    setDate(DateString2Date);
    setDatePickerShow(false);
  };

  React.useEffect(() => {
    setDate(date);
    setDisplayDate(moment(date).format('MMM YYYY'));
    setSelectedMonth(moment(date).format('YYYY/MM'));

    return () => {};
  }, [navigation]);

  const datePickerOption = {
    textHeaderColor: Colors.PRIMARY,
    mainColor: Colors.PRIMARY,
    defaultFont: Typography.FONT_FAMILY.regular,
    headerFont: Typography.FONT_FAMILY.bold,
  };

  return (
    <View style={screenStyles.sectionWrapper}>
      <View style={screenStyles.card}>
        <View style={screenStyles.cardHeader}>
          <Text style={screenStyles.overviewText}>Overview</Text>
          <TouchableOpacity
            onPress={() => setDatePickerShow(true)}
            style={{flexDirection: 'row'}}
          >
            <IconIon
              name="time-outline"
              size={Mixins.scaleFont(18)}
              color={Colors.TEXT.secondary}
            />
            <Text style={screenStyles.dateText}>{displayDate}</Text>
          </TouchableOpacity>

          <Modal
            show={isDatePickerShow}
            loading={false}
            onClose={() => setDatePickerShow(false)}
          >
            <DatePicker
              mode="monthYear"
              selectorStartingYear={2000}
              current={selectedMonth}
              onMonthYearChange={(date: any) => handleConfirm(date)}
              options={datePickerOption}
            />
          </Modal>
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
