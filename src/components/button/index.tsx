import React from 'react';
import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Button} from 'react-native-paper';

import {Colors, Mixins, Typography} from '@utils/index';

interface Props {
  children: any;
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
  const {children, mode, style, contentStyle, labelStyle} = props;

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
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  btnContent: {
    width: Mixins.scaleSize(200),
    height: Mixins.scaleSize(42),
  },
  labelBtn: {
    fontSize: Mixins.scaleFont(18),
    fontFamily: Typography.FONT_FAMILY.bold,
    color: Colors.WHITE,
  },
  btnOutlinedPrimary: {
    borderWidth: Mixins.scaleSize(1),
    borderColor: Colors.PRIMARY,
  },
  labelDarkBtn: {
    fontSize: Mixins.scaleFont(18),
    fontFamily: Typography.FONT_FAMILY.bold,
    color: Colors.TEXT.darkBlue,
  },
});

export default PaperButton;
