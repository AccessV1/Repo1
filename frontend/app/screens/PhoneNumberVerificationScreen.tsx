import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { API_URL } from 'app/apiUrl';
import ConditionalButton from 'app/components/ui/ConditionalButton';
import { useLoginAndRegistrationStore } from 'app/globalStore/LoginAndRegistrationStore';
import { AuthStackParamList } from 'app/navigation/AuthStack';
import { isNumeric, serializePhoneNumber } from 'app/utils';
import React, { useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';

export const PhoneNumberVerificationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const inputsRef = React.useRef<Array<TextInput | null>>([]);
  const { phoneNumber, countryCode } = useLoginAndRegistrationStore();
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [allowResend, setAllowResend] = React.useState<boolean>(false);
  const [codeCountdown, setCodeCountdown] = React.useState('00:59');
  const [otp, setOtp] = React.useState<string[]>(['', '', '', '', '', '']);

  const handleChangeText = (text: string, index: number) => {
    if (error) {
      setError(false);
    }
    const otpCopy = [...otp];
    otpCopy[index] = text;
    setOtp(otpCopy);
    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
    if (!otp.includes('') && isButtonDisabled) {
      setIsButtonDisabled(false);
      return;
    }

    // Checks if all inputs are filled
    const isOtpComplete = otpCopy.every((digit) => digit !== '');
    setIsButtonDisabled(!isOtpComplete);
  };

  const onVerifyCode = async () => {
    if (!isNumeric(otp.join(''))) {
      setError(true);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/auth/verifyPhoneNumberCode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: serializePhoneNumber(phoneNumber, countryCode),
          code: otp.join(''),
        }),
      });
      const response = await res.json();
      if (response.isVerified) {
        navigation.navigate('additionalLoginAndRegistrationInfo');
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index]) {
      // Move to the previous input if backspace is pressed and current input is empty
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    if (codeCountdown === '00:0-1') {
      setAllowResend(true);
      return;
    }
    const timeoutId = setTimeout(() => {
      setCodeCountdown((prev) => {
        if (parseInt(prev.split(':')[1]) <= 10) {
          return '00:' + '0' + String(parseInt(prev.split(':')[1]) - 1);
        }
        return '00:' + String(parseInt(prev.split(':')[1]) - 1);
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [codeCountdown]);

  React.useEffect(() => {}, [codeCountdown]);

  return (
    <TouchableWithoutFeedback>
      <View className=" h-full pt-[15vh]">
        <View className="mb-4 flex-col items-start gap-1">
          <Text className="mb-4 text-4xl font-bold">Verification Code</Text>
          <View className="w-[77%]">
            <Text>
              We have sent you an SMS with a code to number{' '}
              <Text className="font-bold">{`+${countryCode}` + ' ' + phoneNumber}</Text>
            </Text>
          </View>

          <View className="mt-5 flex-row  gap-5">
            {otp.map((digit: string, index: number) => {
              return (
                <TextInput
                  key={index}
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  className={`border ${
                    error ? 'border-red-500' : 'border-gray-300'
                  } mx-1 h-[5.5vh] w-[10vw] rounded-xl bg-colors-lightGray text-center text-xl`}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onChangeText={(text) => handleChangeText(text, index)}
                />
              );
            })}
          </View>
        </View>
        {error && (
          <View>
            <Text className="mb-4 font-semibold text-red-500">*Incorrect OTP</Text>
          </View>
        )}

        <View>
          <ConditionalButton
            className="w-full"
            disabled={isButtonDisabled}
            onPress={onVerifyCode}
            title="Verify Code"
          />
        </View>
        <View className="w-full items-center pt-10 ">
          {allowResend ? (
            <TouchableOpacity onPress={onVerifyCode}>
              <Text className="underlined text-colors-primary ">Resend code</Text>
            </TouchableOpacity>
          ) : (
            <Text>
              Re-send code in <Text className="text-colors-primary">{codeCountdown}</Text>{' '}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
