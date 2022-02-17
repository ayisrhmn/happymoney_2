import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(30),
  },
  loader: {
    height: Mixins.WINDOW_HEIGHT - Mixins.scaleSize(50),
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Mixins.scaleSize(30),
  },
  welcome: {
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
    marginBottom: Mixins.scaleSize(6),
  },
  nameText: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: Mixins.scaleSize(16),
    marginBottom: Mixins.scaleSize(30),
    borderRadius: Mixins.scaleSize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Mixins.scaleSize(2),
    },
    shadowOpacity: Mixins.scaleSize(0.25),
    shadowRadius: Mixins.scaleSize(3.84),
    elevation: Mixins.scaleSize(5),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Mixins.scaleSize(16),
  },
  overviewText: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
  },
  dateText: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
    textAlignVertical: 'center',
    marginLeft: Mixins.scaleSize(3),
  },
  balanceText: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
    marginBottom: Mixins.scaleSize(6),
  },
  balanceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceValue: {
    fontSize: Mixins.scaleFont(20),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
  },
  btnAddTransaction: {
    backgroundColor: Colors.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
    width: Mixins.scaleSize(30),
    height: Mixins.scaleSize(42),
  },
});
