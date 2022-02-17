import React from 'react';
import {
  GestureResponderEvent,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

import {Colors, Mixins} from '@utils/index';

interface Props {
  mode?: 'flat' | 'outlined';
  label?: any;
  focus?: any;
  setFocus?: any;
  disabled?: boolean;
  placeholder?: any;
  defaultValue?: any;
  value?: any;
  error?: any;
  secureTextEntry?: boolean;
  type?: 'default' | 'password' | 'select' | 'date';
  multiline?: boolean;
  mask?: any;
  keyboardType?: any | 'default';
  onChangeText?: ((text: string) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onSecure?: (() => void) | undefined;
}

const inputTheme: any = {
  colors: {
    primary: Colors.SUCCESS,
    placeholder: Colors.PRIMARY,
    text: Colors.TEXT.primary,
  },
};

const Input = (props: Props) => {
  const {type = 'text', error} = props;

  const [focus, setFocus] = React.useState(false);

  return (
    <View style={styles.inputWrapper}>
      {type === 'text' && (
        <InputText {...props} focus={focus} setFocus={setFocus} />
      )}

      {type === 'password' && (
        <InputPassword {...props} focus={focus} setFocus={setFocus} />
      )}

      {/* {props?.select && (
        <>
          {props?.onPress !== undefined && (
            <View>
              <TouchableOpacity
                onPress={props?.onPress}
                style={styles.touchable}
              />
              <InputSelect {...props} focus={focus} setFocus={setFocus} />
            </View>
          )}

          {props?.onPress === undefined && (
            <InputSelect {...props} focus={focus} setFocus={setFocus} />
          )}
        </>
      )}

      {props?.date && (
        <>
          {props?.onPress !== undefined && (
            <View>
              <TouchableOpacity
                onPress={props?.onPress}
                style={styles.touchable}
              />
              <InputDate {...props} focus={focus} setFocus={setFocus} />
            </View>
          )}

          {props?.onPress === undefined && (
            <InputDate {...props} focus={focus} setFocus={setFocus} />
          )}
        </>
      )} */}

      {error && <Text style={styles.errorLabel}>{error.message}</Text>}
    </View>
  );
};

const InputText = (props: Props) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={Colors.GREY}
      selectionColor={Colors.PRIMARY}
      style={styles.input}
      theme={inputTheme}
      onFocus={() => props?.setFocus(true)}
      onBlur={() => props?.setFocus(false)}
    />
  );
};

const InputPassword = (props: Props) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={Colors.GREY}
      selectionColor={Colors.PRIMARY}
      style={styles.input}
      theme={inputTheme}
      onFocus={() => props?.setFocus(true)}
      onBlur={() => props?.setFocus(false)}
      right={
        <TextInput.Icon
          name={props?.secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
          color={props?.focus ? Colors.SUCCESS : Colors.PRIMARY}
          onPress={props?.onSecure}
        />
      }
    />
  );
};

// const InputSelect: React.FC<Props> = props => {
//   return (
//     <>
//       <Text style={props?.focus ? [styles.labelActive] : [styles.label]}>
//         {props?.name}
//       </Text>
//       <TextInput
//         {...props}
//         placeholderTextColor={Colors.SHADES.dark[50]}
//         selectionColor={Colors.SHADES.dark[40]}
//         style={styles.input}
//         theme={inputTheme}
//         onFocus={() => props?.setFocus(true)}
//         onBlur={() => props?.setFocus(false)}
//         right={
//           <TextInput.Icon
//             name={'chevron-down'}
//             color={props?.disabled ? Colors.SHADES.dark[40] : Colors.BLACK}
//           />
//         }
//       />
//     </>
//   );
// };

// const InputDate: React.FC<Props> = props => {
//   return (
//     <>
//       <Text style={props?.focus ? [styles.labelActive] : [styles.label]}>
//         {props?.name}
//       </Text>
//       <TextInput
//         {...props}
//         placeholderTextColor={Colors.SHADES.dark[50]}
//         selectionColor={Colors.SHADES.dark[40]}
//         style={styles.input}
//         theme={inputTheme}
//         onFocus={() => props?.setFocus(true)}
//         onBlur={() => props?.setFocus(false)}
//       />
//     </>
//   );
// };

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: Mixins.scaleSize(20),
  },
  input: {
    backgroundColor: Colors.WHITE,
  },
  touchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
  errorLabel: {
    fontSize: Mixins.scaleFont(12),
    paddingTop: Mixins.scaleSize(3),
    color: Colors.DANGER,
  },
});

export default Input;
