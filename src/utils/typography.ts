import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

// font family
export const FONT_FAMILY = {
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
};

// set custom fonts globally
export const typography = () => {
  let text: any = Text;
  let oldRender = text.render;

  text.render = function (...args: any[]) {
    let origin: any = oldRender.call(this, ...args);

    return React.cloneElement(origin, {
      style:
        origin.props.style?.fontWeight === 'bold'
          ? [styles.bold, origin.props.style, {fontWeight: 'normal'}]
          : [styles.regular, origin.props.style, {fontWeight: 'normal'}],
    });
  };
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: FONT_FAMILY.regular,
  },
  bold: {
    fontFamily: FONT_FAMILY.bold,
  },
});
