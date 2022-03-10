import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(24),
  },
  row: {
    flexDirection: 'row',
  },
  sectionWrapper: {
    marginVertical: Mixins.scaleSize(14),
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
    marginBottom: Mixins.scaleSize(4),
  },
  itemContent: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.TEXT.secondary,
    textAlignVertical: 'center',
    marginLeft: Mixins.scaleSize(6),
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
