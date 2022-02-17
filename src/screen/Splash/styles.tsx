import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

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
  title: {
    fontSize: Mixins.scaleFont(28),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
    marginBottom: Mixins.scaleSize(8),
  },
  tagline: {
    fontSize: Mixins.scaleFont(16),
    color: Colors.TEXT.primary,
  },
});
