import {StyleSheet} from 'react-native';
import {Mixins, Typography} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Mixins.scaleSize(200),
    height: Mixins.scaleSize(146),
    marginBottom: Mixins.scaleSize(21),
  },
  title: Typography.textStyle('primary', 'bold', 28, {
    marginBottom: Mixins.scaleSize(5),
  }),
  tagline: Typography.textStyle('primary', 'regular', 16, {
    fontStyle: 'italic',
  }),
});