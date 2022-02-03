import React from 'react';
import {Avatar} from 'react-native-paper';

import {Mixins} from '@utils/index';

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
      }}
      style={{
        backgroundColor: color,
        marginVertical: Mixins.scaleSize(5),
      }}
    />
  );
};

export default PaperAvatar;
