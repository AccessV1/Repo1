import { useAuthStore } from 'app/globalStore/authStore';
import React from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';

export const PhoneNumberVerificationScreen = () => {
  const inputsRef = React.useRef<Array<TextInput | null>>([]);
  const { phoneNumber, countryCode } = useAuthStore();
  const [error, setError] = React.useState<string>('');
  const [otp, setOtp] = React.useState<string[]>(['', '', '', '', '', ""]);

  const handleChangeText = (text: string, index: number) => {
    const otpCopy = [...otp];
    otpCopy[index] = text;
      setOtp(otpCopy);
      if (text && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
  };
  return (
    <TouchableWithoutFeedback>
      <View className=" h-full pt-[15vh]">
        <View className="mb-8 flex-col items-start gap-1">
          <Text className="mb-4 text-4xl font-bold">Verification Code</Text>
          <View className="w-[77%]">
            <Text>
              We have sent you an SMS with a code to number{' '}
              <Text className="font-bold">{`+${countryCode}` + ' ' + phoneNumber}</Text>
            </Text>
          </View>

          <View className="flex-row gap-5  mt-5">
            {otp.map((digit: string, index: number) => {
              return (
                <TextInput
                  key={index}
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  className={`border ${
                    error ? 'border-red-500' : 'border-gray-300'
                  } mx-1 h-[5.5vh] w-[10vw] bg-colors-lightGray rounded-xl text-center text-xl`}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, index)}
                />
              );
            })}
          </View>
        </View>
        {/* */}
        <View></View>
      </View>
    </TouchableWithoutFeedback>
  );
};
