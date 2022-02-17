import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';

import {Colors, Helper, Mixins} from '@utils/index';

interface Props {
  exPercentage: number;
  inPercentage: number;
  exValue?: number;
  inValue?: number;
  withLabel?: boolean;
  exBarColor?: any;
  inBarColor?: any;
  containerStyle?: StyleProp<ViewStyle>;
}

const OverviewBar = (props: Props) => {
  const {
    exPercentage = 0,
    inPercentage = 0,
    exValue,
    inValue,
    withLabel = true,
    exBarColor = Colors.DANGER,
    inBarColor = Colors.SUCCESS,
    containerStyle,
  } = props;

  return (
    <View style={containerStyle}>
      <View style={styles.barWrapper}>
        <View
          style={[
            styles.expenseBar,
            {width: `${exPercentage}%`, backgroundColor: exBarColor},
          ]}
        />
        <View
          style={[
            styles.incomeBar,
            {width: `${inPercentage}%`, backgroundColor: inBarColor},
          ]}
        />
      </View>
      {withLabel && (
        <View style={styles.barLabelWrapper}>
          <Text style={styles.expenseBarLabel}>
            {`- ${Helper.numberWithSeparator(exValue)}`}
          </Text>
          <Text style={styles.incomeBarLabel}>
            {`+ ${Helper.numberWithSeparator(inValue)}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default OverviewBar;

const styles = StyleSheet.create({
  barWrapper: {
    flexDirection: 'row',
    marginBottom: Mixins.scaleSize(6),
  },
  expenseBar: {
    height: Mixins.scaleSize(8),
    borderRadius: Mixins.scaleSize(50),
    marginRight: Mixins.scaleSize(2),
  },
  incomeBar: {
    height: Mixins.scaleSize(8),
    borderRadius: Mixins.scaleSize(50),
    marginLeft: Mixins.scaleSize(2),
  },
  barLabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseBarLabel: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.DANGER,
  },
  incomeBarLabel: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.SUCCESS,
  },
});
