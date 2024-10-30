import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
import { useLoginAndRegistrationStore } from 'app/globalStore/LoginAndRegistrationStore';
import ConditionalButton from 'app/components/ui/ConditionalButton';
import React, { useEffect } from 'react';
import { serializePhoneNumber } from 'app/utils';
import { API_URL } from 'app/apiUrl';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'app/navigation/AuthStack';
export const PhoneNumberLoginAndRegistrationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { phoneNumber, setPhoneNumber } = useLoginAndRegistrationStore();
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>();
  const [countryCode, setCountryCode] = React.useState<string>('1');

  useEffect(() => {
    if (phoneNumber && phoneNumber.length === 12) {
      setIsButtonDisabled(false);
      Keyboard.dismiss();
    } else {
      setIsButtonDisabled(true);
    }
  }, [phoneNumber]);
  const handleSendVerificationCode = async () => {
    if (phoneNumber) {
      try {
        const res = await fetch(`${API_URL}/auth/sendVerificationCode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber: serializePhoneNumber(phoneNumber, countryCode) }),
        });
        const response = await res.json();
        navigation.navigate('verifyPhoneNumber');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="items-center">
        <View className=" h-full pt-[15vh]">
          <View className="mb-8 flex-col items-start gap-1">
            <Text className="text-4xl font-semibold text-colors-primary">Get Started</Text>
          
          </View>
          <View>
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          </View>
        </View>
        <ConditionalButton
          className="absolute bottom-0  w-full"
          disabled={isButtonDisabled}
          onPress={handleSendVerificationCode}
          title="Next"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
