import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(30),
  },
  headerWrapper: {
    marginTop: Mixins.scaleSize(30),
    marginBottom: Mixins.scaleSize(50),
  },
  title: {
    fontSize: Mixins.scaleFont(28),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
    marginBottom: Mixins.scaleSize(6),
  },
  subtitle: {
    fontSize: Mixins.scaleFont(16),
    color: Colors.TEXT.secondary,
  },
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
  textAction: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.primary,
  },
  linkSignUp: {
    fontSize: Mixins.scaleFont(14),
    fontWeight: 'bold',
    color: Colors.SUCCESS,
  },
});
