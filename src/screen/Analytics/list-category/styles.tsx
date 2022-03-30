import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  sectionCard: {
    paddingHorizontal: Mixins.scaleSize(24),
  },
  row: {
    flexDirection: 'row',
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
});
