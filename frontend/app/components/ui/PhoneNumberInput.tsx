import { View, TextInput, Text, Dimensions } from 'react-native';
import CountryCodeSelect from './CountryCodeSelector/CountryCodeSelect';

const { width } = Dimensions.get('window');
const dynamicWidth = width * 0.9;
import { formatPhoneNumber } from 'app/utils';
import React from 'react';
interface PhoneNumberInputProps {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
}
const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
}: any) => {
  const handlePhoneChange = (text: string) => {
    const formattedPhoneNumber = formatPhoneNumber(text);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <View>
      <Text className="pb-[10] font-[600]">Phone Number</Text>
      <View
        className="mb-[20] h-[50] flex-row rounded-[8] bg-colors-lightGray p-[10] font-[600]"
        style={{ width: dynamicWidth }}>
        <CountryCodeSelect countryCode={countryCode} setCountryCode={setCountryCode} />

        {/* Phone number input field */}
        <TextInput
          textContentType="telephoneNumber"
          className="w-full pl-10 font-[600]"
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
          placeholder="Enter your phone number"
          maxLength={12}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
