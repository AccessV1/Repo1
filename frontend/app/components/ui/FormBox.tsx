import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type FormBoxProps = {
  title: string;
  type: 'number' | 'text' | 'price' | 'description' | 'time' | 'none';
  placeholder?: string;
  components?: React.ReactNode;
  isRequire?: boolean;
  hasBorder?: boolean;
};

const FormBox: React.FC<FormBoxProps> = ({
  title,
  type,
  isRequire = false,
  hasBorder = true,
  components,
  placeholder,
}) => {
  const [value, setValue] = useState<number | string>(type === 'number' ? 0 : '');

  const handleIncrement = () => {
    if (type === 'number') {
      setValue((prevValue) => (typeof prevValue === 'number' ? prevValue + 1 : 1));
    }
  };

  const handleDecrement = () => {
    if (type === 'number') {
      setValue((prevValue) => (typeof prevValue === 'number' && prevValue > 0 ? prevValue - 1 : 0));
    }
  };

  const handleInputChange = (text: string) => {
    if (type === 'number') {
      const numericValue = parseInt(text, 10);
      if (!isNaN(numericValue)) {
        setValue(numericValue);
      }
    } else {
      setValue(text);
    }
  };

  const [time, setTime] = useState('');
  const [isAM, setIsAM] = useState(true);

  const handleTimeChange = (input: string) => {
    const numericInput = input.replace(/[^0-9]/g, '');

    if (numericInput.length > 4) return;

    let formattedTime = '';
    if (numericInput.length <= 2) {
      const hours = parseInt(numericInput, 10);
      if (hours >= 1 && hours <= 12) {
        formattedTime = hours.toString().padStart(2, '0');
      }
    } else {
      const hours = parseInt(numericInput.slice(0, 2), 10);
      const minutes = parseInt(numericInput.slice(2), 10);

      if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes < 60) {
        formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}`;
      }
    }

    setTime(formattedTime);
  };

  const toggleAMPM = () => {
    setIsAM(!isAM);
  };

  const renderInputField = () => {
    switch (type) {
      case 'number':
        return (
          <View className="mb-1 flex-row items-center justify-between">
            <TextInput
              value={value != 0 ? value.toString() : ''}
              onChangeText={handleInputChange}
              keyboardType="numeric"
              className="flex-1 rounded text-lg"
              placeholder={placeholder}
            />
            <View className="flex w-1/6 items-end space-y-2">
              <TouchableOpacity
                onPress={handleIncrement}
                className="mb-1 h-6 w-full items-center justify-center rounded rounded-b-none bg-gray-200">
                <AntDesignIcon name="caretup" size={12} style={{ color: '#6B7280' }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDecrement}
                className="h-6 w-full items-center justify-center rounded rounded-t-none bg-gray-200">
                <AntDesignIcon name="caretdown" size={12} style={{ color: '#6B7280' }} />
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'price':
        return (
          <TextInput
            keyboardType="numeric"
            className="mb-1 flex-1 rounded text-lg"
            placeholder={placeholder}
          />
        );
      case 'description':
        return (
          <TextInput
            multiline
            numberOfLines={4}
            className="mb-1 w-full rounded text-lg"
            style={{ minHeight: 100 }}
            placeholder={placeholder}
          />
        );
      case 'time':
        return (
          <View className="flex flex-row" style={{ position: 'relative', width: '100%' }}>
            <TextInput
              className="flex-1"
              keyboardType="numeric"
              value={time}
              onChangeText={handleTimeChange}
              placeholder="00:00"
              maxLength={5}
              style={{
                fontSize: 18,
                width: '100%',
              }}
            />
            <TouchableOpacity
              onPress={toggleAMPM}
              className="flex w-1/3 items-center justify-center rounded-md bg-gray-300">
              <Text className=" font-semibold text-gray-500">{isAM ? 'AM' : 'PM'}</Text>
            </TouchableOpacity>
          </View>
        );
      case 'text':
      default:
        return <TextInput className="mb-1 w-full rounded text-lg" placeholder={placeholder} />;
    }
  };

  return (
    <View
      className={`my-2 rounded-lg ${
        components || !hasBorder ? 'py-2' : 'border border-gray-300 px-3 py-2'
      }`}>
      <Text className={`${components ? 'mb-2' : 'mb-1'} text-md text-gray-500`}>
        {title}
        {isRequire && <Text className="text-red-500"> *</Text>}
      </Text>
      {components ? components : renderInputField()}
    </View>
  );
};

export default FormBox;
