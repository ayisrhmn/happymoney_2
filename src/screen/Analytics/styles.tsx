import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(24),
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Mixins.scaleSize(24),
    marginBottom: Mixins.scaleSize(16),
  },
  title: {
    fontSize: Mixins.scaleFont(18),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
    textAlignVertical: 'center',
    marginBottom: Mixins.scaleSize(6),
  },
  dateText: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
    textAlignVertical: 'center',
    marginLeft: Mixins.scaleSize(3),
  },
  chartWrapper: {
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(30),
  },
  listWrapper: {
    marginBottom: Mixins.scaleSize(14),
  },
  listTitle: {
    fontSize: Mixins.scaleFont(16),
    color: Colors.TEXT.secondary,
    marginBottom: Mixins.scaleSize(16),
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: Mixins.scaleSize(16),
    marginBottom: Mixins.scaleSize(16),
    borderRadius: Mixins.scaleSize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Mixins.scaleSize(1),
    },
    shadowOpacity: Mixins.scaleSize(0.22),
    shadowRadius: Mixins.scaleSize(2.22),
    elevation: Mixins.scaleSize(3),
  },
  itemTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.TEXT.primary,
  },
  itemExValue: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.DANGER,
  },
  itemInValue: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.SUCCESS,
  },
  emptyWrapper: {
    marginTop: Mixins.scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    width: Mixins.scaleSize(240),
    height: Mixins.scaleSize(140),
  },
  emptyLabel: {
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginTop: Mixins.scaleSize(20),
  },
});
