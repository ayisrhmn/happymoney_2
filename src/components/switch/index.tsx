import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Text} from 'react-native-paper';

import {Colors, Mixins} from '@utils/index';

interface Props {
  firstLabel: string;
  secondLabel: string;
  containerStyle?: StyleProp<ViewStyle>;
  firstSwitchStyle?: StyleProp<ViewStyle>;
  secondSwitchStyle?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  firstValue: boolean;
  secondValue: boolean;
  onSwitch: () => void;
}

const SwitchButton = (props: Props) => {
  const {
    firstLabel,
    secondLabel,
    containerStyle,
    firstSwitchStyle,
    secondSwitchStyle,
    labelStyle,
    firstValue = true,
    secondValue = false,
    onSwitch,
  } = props;

  return (
    <TouchableOpacity onPress={onSwitch} activeOpacity={0.8}>
      <View style={styles.switchWrapper}>
        <View style={[styles.switchContainer, containerStyle]}>
          <View
            style={
              firstValue
                ? [styles.switchRedOn, firstSwitchStyle]
                : styles.switchOff
            }
          >
            <Text style={{...styles.switchLabel, ...labelStyle}}>
              {firstLabel}
            </Text>
          </View>
          <View
            style={
              secondValue
                ? [styles.switchGreenOn, secondSwitchStyle]
                : styles.switchOff
            }
          >
            <Text style={{...styles.switchLabel, ...labelStyle}}>
              {secondLabel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  switchWrapper: {
    alignItems: 'baseline',
  },
  switchContainer: {
    backgroundColor: Colors.GREY,
    flexDirection: 'row',
    borderRadius: Mixins.scaleSize(50),
    padding: Mixins.scaleSize(3),
  },
  switchRedOn: {
    backgroundColor: Colors.DANGER,
    borderRadius: Mixins.scaleSize(50),
    padding: Mixins.scaleSize(6),
  },
  switchGreenOn: {
    backgroundColor: Colors.SUCCESS,
    borderRadius: Mixins.scaleSize(50),
    padding: Mixins.scaleSize(6),
  },
  switchOff: {
    padding: Mixins.scaleSize(6),
  },
  switchLabel: {
    fontSize: Mixins.scaleFont(12),
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
