import React from 'react';
import {appColors} from '../../globalStyles';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface DisabledButtonProps {
    onPress?: () => void;
    title: string;
    disabled?: boolean;
    style?: any;
}


/**
 * @description Custom button component that can be enabled or disabled based on the "disabled" prop.
 */
const DisabledButton = ({ onPress, title, disabled, style }: DisabledButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
        style, // Optional: allow additional styles to be passed
      ]}
      onPress={onPress}
      disabled={disabled} // Button is disabled if "disabled" prop is true
    >
      <Text style={ disabled? styles.buttonTextDisabled : styles.buttonTextEnabled }>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    backgroundColor: appColors.primary
  },
  buttonDisabled: {
    backgroundColor: appColors.lightGray,
    
  },
  buttonTextEnabled: {
    color: 'white',
    fontSize: 16,
  },

  buttonTextDisabled: {
    color: appColors.gray,
    fontSize: 16,
  },
});

export default DisabledButton;