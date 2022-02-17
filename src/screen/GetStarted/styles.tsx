import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: {
    width: Mixins.scaleSize(240),
    height: Mixins.scaleSize(140),
    marginBottom: Mixins.scaleSize(42),
  },
  greeting: {
    fontSize: Mixins.scaleFont(26),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
    marginBottom: Mixins.scaleSize(16),
  },
  subtitle: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.primary,
    textAlign: 'center',
    marginBottom: Mixins.scaleSize(50),
  },
});
