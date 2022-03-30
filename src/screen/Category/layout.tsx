import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {useActions, useAppState} from '@overmind/index';
import {useIsFocused} from '@react-navigation/native';
import container from '@components/container';
import {Colors, Helper, Mixins} from '@utils/index';

import {screenStyles} from './styles';

interface Props {
  navigation?: any;
}

const Layout = (props: Props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();

  const {getCategory} = useActions();
  const {category} = useAppState();

  React.useEffect(() => {
    if (isFocused) {
      getCategory();
    }

    return () => {};
  }, [navigation, isFocused]);

  const filterData = (type: any) => {
    let categoryData = category.filter((o: any) => o.type === type);

    return categoryData;
  };

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.headerTitle}>
        <Text style={screenStyles.title}>Category</Text>

        <TouchableOpacity
          onPress={() => console.log('add pressed!')}
          activeOpacity={0.6}
        >
          <View style={[screenStyles.row, screenStyles.addBtn]}>
            <Icon
              name="add-circle-sharp"
              size={Mixins.scaleFont(20)}
              color={Colors.WHITE}
              style={{marginRight: Mixins.scaleSize(3)}}
            />
            <Text style={screenStyles.labelAdd}>Add Category</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={screenStyles.listSection}>
        <Text style={screenStyles.listTitle}>Income Category</Text>

        {filterData('income')?.map((item: any, i: number) => (
          <View style={screenStyles.card} key={i}>
            <View style={screenStyles.itemTransaction}>
              <Text style={screenStyles.itemTitle}>{item.name}</Text>
              <View style={screenStyles.row}>
                <TouchableOpacity onPress={() => console.log('edit pressed!')}>
                  <Icon
                    name="pencil"
                    size={Mixins.scaleFont(20)}
                    color={Colors.PRIMARY}
                    style={{marginRight: Mixins.scaleSize(10)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('delete pressed!')}
                >
                  <Icon
                    name="trash"
                    size={Mixins.scaleFont(20)}
                    color={Colors.DANGER}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={screenStyles.listSection}>
        <Text style={screenStyles.listTitle}>Expense Category</Text>

        {filterData('expense').map((item: any, i: number) => (
          <View style={screenStyles.card} key={i}>
            <View style={screenStyles.itemTransaction}>
              <View>
                <Text style={screenStyles.itemTitle}>{item.name}</Text>
                {item.ex_limit !== 0 ? (
                  <Text style={screenStyles.exLimitText}>
                    Expense limit: {Helper.numberWithSeparator(item.ex_limit)}
                  </Text>
                ) : undefined}
              </View>
              <View style={screenStyles.row}>
                <TouchableOpacity onPress={() => console.log('edit pressed!')}>
                  <Icon
                    name="pencil"
                    size={Mixins.scaleFont(20)}
                    color={Colors.PRIMARY}
                    style={{marginRight: Mixins.scaleSize(10)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('delete pressed!')}
                >
                  <Icon
                    name="trash"
                    size={Mixins.scaleFont(20)}
                    color={Colors.DANGER}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default container(Layout);
