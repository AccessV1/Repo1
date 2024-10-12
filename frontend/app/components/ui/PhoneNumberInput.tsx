import { View, TextInput, Text, Dimensions } from 'react-native';
import CountryCodeSelect from './CountryCodeSelector/CountryCodeSelect';

const { width } = Dimensions.get('window');
const dynamicWidth = width * 0.9;
import { formatPhoneNumber } from 'app/utils';

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }: any) => {
  const handlePhoneChange = (text: string) => {
    const formattedPhoneNumber = formatPhoneNumber(text);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <View>
      <Text className="pb-[10] font-[600]">Phone Number</Text>
      <View
        className="bg-colors-lightGray mb-[20] h-[50] flex-row rounded-[8] p-[10] font-[600]"
        style={{ width: dynamicWidth }}>
        <CountryCodeSelect />

        {/* Phone number input field */}
        <TextInput
          textContentType='telephoneNumber'
          className="pl-10 font-[600]"
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
