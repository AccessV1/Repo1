import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import React from 'react';

interface ConditionalButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title: string;
}

/**
 * @description Custom button component that can be enabled or disabled based on the "disabled" prop. Can easily be custumized by passing in a className or style prop.
 *
 */
const ConditionalButton = ({
  onPress,
  title,
  disabled,
  className,
  style,
}: ConditionalButtonProps) => {
  return (
    <TouchableOpacity
      className={`justify-center rounded-[8] px-[30] py-[15] align-middle ${disabled ? 'bg-colors-lightGray' : 'bg-colors-primary'} ${className}`}
      style={style}
      onPress={onPress}
      disabled={disabled} // Button is disabled if "disabled" prop is true
    >
      <Text className={`text-center text-[15] ${disabled ? 'text-colors-gray' : 'text-white'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default ConditionalButton;
