import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Modal, Portal, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Mixins} from '@utils/index';

interface Props {
  children: any;
  show: boolean;
  loading: boolean;
  onClose?: Function;
  showCloseButton?: boolean;
  dismissable?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const PaperModal = (props: Props) => {
  const {
    children,
    show,
    loading,
    onClose,
    showCloseButton = false,
    dismissable,
    contentContainerStyle,
  } = props;

  const [visible, setVisible] = React.useState(show);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    onClose?.();
    setVisible(false);
  };

  React.useEffect(() => {
    if (show) {
      showModal();
    } else {
      hideModal();
    }
    return () => {};
  }, [show]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        dismissable={dismissable}
        contentContainerStyle={[
          {
            ...styles.containerStyle,
            backgroundColor: loading ? 'transparent' : Colors.WHITE,
          },
          contentContainerStyle ? contentContainerStyle : null,
        ]}
      >
        {loading === false && (
          <>
            {showCloseButton && (
              <TouchableOpacity
                style={styles.close}
                onPress={() => hideModal()}
              >
                <Icon
                  name="close-outline"
                  size={Mixins.scaleFont(18)}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            )}
            {children}
          </>
        )}
        {loading === true && (
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.WHITE}
          />
        )}
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.WHITE,
    margin: Mixins.scaleSize(30),
    borderRadius: Mixins.scaleSize(10),
  },
  close: {
    position: 'absolute',
    right: Mixins.scaleSize(0),
    top: Mixins.scaleSize(0),
    padding: Mixins.scaleSize(14),
    zIndex: 99,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Mixins.scaleSize(20),
    paddingBottom: Mixins.scaleSize(15),
  },
});

export default PaperModal;
