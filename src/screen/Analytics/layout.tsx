import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {useIsFocused} from '@react-navigation/native';
import {useActions, useAppState} from '@overmind/index';
import container, {ContainerContext} from '@components/container';
import SwitchButton from '@components/switch';
import {Colors, Helper, Mixins, Typography} from '@utils/index';
import images from '@assets/images';

import {VictoryPie} from 'victory-native';
import {screenStyles} from './styles';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const ctx = React.useContext(ContainerContext);

  const {datePickerShow, toggleSwitch, getAnalytics} = useActions();
  const {displayDate, valSwitch, analytics} = useAppState();

  React.useLayoutEffect(() => {
    ctx.setRefreshCallback({
      func: async () => {
        console.warn('from analytics');
      },
    });

    return () => {};
  }, [navigation]);

  React.useEffect(() => {
    if (isFocused) {
      getAnalytics();
    }

    return () => {};
  }, [navigation, isFocused]);

  const colorScale = () => {
    const exDataColor = ['#DE3535', '#FF5454', '#FF8282', '#FFA1A1', '#FFC2C2'];
    const inDataColor = ['#37A173', '#41BA86', '#4FD79C', '#6FE8B4', '#8DFCCD'];

    let dataColor = valSwitch ? exDataColor : inDataColor;

    return dataColor;
  };

  const chartData = (data: any) => {
    let analyticData = valSwitch ? data?.expense : data?.income;

    return analyticData?.map(({category, value}: any) => ({
      x: category,
      y: value,
    }));
  };

  const filterData = (data: any) => {
    let analyticData = valSwitch ? data?.expense : data?.income;

    return analyticData;
  };

  const cardContent = (item: any, i: number) => (
    <View style={screenStyles.itemTransaction}>
      <Text style={screenStyles.itemTitle}>{`${i + 1}. ${item.category}`}</Text>

      {valSwitch ? (
        <Text style={screenStyles.itemExValue}>
          {`- ${Helper.numberWithSeparator(item.value)}`}
        </Text>
      ) : (
        <Text style={screenStyles.itemInValue}>
          {`+ ${Helper.numberWithSeparator(item.value)}`}
        </Text>
      )}
    </View>
  );

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.headerTitle}>
        <View>
          <Text style={screenStyles.title}>Analytics Data</Text>
          <TouchableOpacity
            onPress={() => datePickerShow(true)}
            style={{flexDirection: 'row'}}
          >
            <Icon
              name="time-outline"
              size={Mixins.scaleFont(18)}
              color={Colors.TEXT.secondary}
            />
            <Text style={screenStyles.dateText}>{displayDate}</Text>
          </TouchableOpacity>
        </View>
        <SwitchButton
          firstLabel="Expense"
          secondLabel="Income"
          firstValue={valSwitch}
          secondValue={!valSwitch}
          onSwitch={() => toggleSwitch(!valSwitch)}
        />
      </View>

      {filterData(analytics)?.length !== 0 ? (
        <>
          <View style={screenStyles.chartWrapper}>
            <VictoryPie
              height={Mixins.scaleSize(280)}
              colorScale={colorScale()}
              data={chartData(analytics)}
              animate={{duration: 800}}
              innerRadius={56}
              style={{
                labels: {
                  fontSize: Mixins.scaleSize(14),
                  fontFamily: Typography.FONT_FAMILY.regular,
                  fill:
                    chartData(analytics) !== undefined
                      ? Colors.PRIMARY
                      : 'transparent',
                },
              }}
            />
          </View>

          <View style={screenStyles.listWrapper}>
            <Text style={screenStyles.listTitle}>
              5 Largest {valSwitch ? 'expense' : 'income'} by category
            </Text>
            {filterData(analytics)?.map((item: any, i: number) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AnalyticsDetail')}
                activeOpacity={0.7}
                key={i}
              >
                <View
                  style={{
                    ...screenStyles.card,
                    backgroundColor: valSwitch ? Colors.DANGER : Colors.SUCCESS,
                  }}
                >
                  {cardContent(item, i)}
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AnalyticsListCategory', {
                  data: filterData(analytics),
                  type: valSwitch ? 'expense' : 'income',
                })
              }
            >
              <Text style={screenStyles.seeAllLink}>
                See all {valSwitch ? 'expense' : 'income'} by category
              </Text>
            </TouchableOpacity>
          </View>
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

export default container(Layout);
