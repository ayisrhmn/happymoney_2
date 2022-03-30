import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '@utils/index';

export const screenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(24),
  },
  row: {
    flexDirection: 'row',
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
  listSection: {
    marginBottom: Mixins.scaleSize(12),
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
  exLimitText: {
    color: Colors.TEXT.secondary,
    fontSize: Mixins.scaleFont(11),
    marginTop: Mixins.scaleSize(3),
  },
  addBtn: {
    backgroundColor: Colors.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(6),
    borderRadius: Mixins.scaleSize(50),
  },
  labelAdd: {
    fontSize: Mixins.scaleFont(12),
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
