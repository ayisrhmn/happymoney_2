import React from 'react';
import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Button} from 'react-native-paper';

import {Colors, Mixins, Typography} from '@utils/index';

interface Props {
  children?: any;
  mode?: 'text' | 'outlined' | 'contained';
  dark?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: (() => void) | undefined;
}

const PaperButton = (props: Props) => {
  const {mode, style, contentStyle, labelStyle} = props;

  return (
    <Button
      {...props}
      style={mode === 'outlined' ? [styles.btnOutlinedPrimary, style] : style}
      contentStyle={[styles.btnContent, contentStyle]}
      labelStyle={
        mode === 'outlined'
          ? [styles.labelDarkBtn, labelStyle]
          : [styles.labelBtn, labelStyle]
      }
    >
      {props?.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  btnContent: {
    width: Mixins.scaleSize(200),
    height: Mixins.scaleSize(46),
  },
  labelBtn: Typography.textStyle('white', 'bold', 18),
  btnOutlinedPrimary: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY.darkBlue,
  },
  labelDarkBtn: Typography.textStyle('darkblue', 'bold', 18),
});

export default PaperButton;
