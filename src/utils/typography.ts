import {TextStyle} from 'react-native';
import {Colors, Mixins} from '@utils/index';

// font family
export const FONT_FAMILY = {
  light: 'Lato-Light',
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
};

// text style
export const textStyle = (
  type: 'primary' | 'secondary' | 'darkblue' | 'green' | 'red' | 'white' = 'primary',
  fontWeight: 'light' | 'regular' | 'bold' = 'regular',
  size: number = 14,
  additionalStyle: TextStyle = {},
) => {
  const getFontFamily = (fw: any) => {
    if (fw === 'light') {
      return FONT_FAMILY.light;
    } else if (fw === 'regular') {
      return FONT_FAMILY.regular;
    } else {
      return FONT_FAMILY.bold;
    }
  };

  const getTextColor = (type: any) => {
    if (type === 'primary') {
      return Colors.SECONDARY.darkBlue;
    } else if (type === 'secondary') {
      return Colors.GREY;
    } else if (type === 'darkblue') {
      return Colors.PRIMARY.darkBlue;
    } else if (type === 'green') {
      return Colors.PRIMARY.green;
    } else if (type === 'red') {
      return Colors.RED;
    } else {
      return Colors.WHITE;
    }
  };

  return {
    ...additionalStyle,
    fontFamily: getFontFamily(fontWeight),
    fontSize: Mixins.scaleFont(size),
    color: getTextColor(type),
  };
};
