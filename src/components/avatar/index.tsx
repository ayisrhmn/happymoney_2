import React from 'react';
import {Avatar} from 'react-native-paper';

import {Mixins, Typography} from '@utils/index';

interface Props {
  size?: any;
  label?: any;
  labelSize?: any;
  color?: string;
}

const PaperAvatar = (props: Props) => {
  const {size, label, labelSize, color} = props;

  return (
    <Avatar.Text
      size={size}
      label={label}
      labelStyle={{
        fontSize: labelSize,
        fontFamily: Typography.FONT_FAMILY.bold,
      }}
      style={{
        backgroundColor: color,
        marginVertical: Mixins.scaleSize(5),
      }}
    />
  );
};

export default PaperAvatar;
