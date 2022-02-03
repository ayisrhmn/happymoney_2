import {StyleSheet} from 'react-native';
import {Mixins, Typography} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(30),
  },
  headerWrapper: {
    marginTop: Mixins.scaleSize(30),
    marginBottom: Mixins.scaleSize(50),
  },
  title: Typography.textStyle('primary', 'bold', 28, {
    marginBottom: Mixins.scaleSize(6),
  }),
  subtitle: Typography.textStyle('secondary', 'regular', 16),
  action: {
    marginVertical: Mixins.scaleSize(50),
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textActionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textAction: Typography.textStyle('primary', 'regular', 14),
  linkSignIn: Typography.textStyle('green', 'bold', 14),
});
