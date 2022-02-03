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
    marginBottom: Mixins.scaleSize(46),
  },
  greeting: Typography.textStyle('primary', 'bold', 26, {
    marginBottom: Mixins.scaleSize(16),
  }),
  subtitle: Typography.textStyle('primary', 'regular', 14, {
    textAlign: 'center',
    marginBottom: Mixins.scaleSize(50),
  }),
});
