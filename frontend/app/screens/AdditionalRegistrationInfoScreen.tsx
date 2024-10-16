import React, { useState } from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import ConditionalButton from 'app/components/ui/ConditionalButton';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
import { useLoginAndRegistrationStore } from 'app/globalStore/LoginAndRegistrationStore';
import { serializePhoneNumber } from 'app/utils';
import { API_URL } from 'app/apiUrl';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'app/navigation/MainStack';
import { useAuthStore } from 'app/globalStore/authStore';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  username: string;
}
export const AdditionalRegistrationInfoScreen = () => {
  const { setIsLoggedIn } = useAuthStore();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const { phoneNumber, countryCode } = useLoginAndRegistrationStore();
  const [error, setError] = React.useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [formData, setFormData] = React.useState<FormData>({
    phoneNumber: serializePhoneNumber(phoneNumber, countryCode),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  React.useEffect(() => {
    setIsButtonDisabled(
      formData.firstName === '' && formData.lastName === '' && formData.email === ''
    );
    setError('');
  }, [formData, confirmPassword]);

  const onSubmit = async () => {
    if (formData.password !== confirmPassword) {
      setError('passwords do not match');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError('invalid email');
    }

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          profilePicture: '',
        }),
      });
      if ((await res.text()).includes('>')) {
        throw new Error('registration failed');
      } else {
        setIsLoggedIn(true);
      }
    } catch (err) {
      setError(String(err));
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="mx-10 mt-[15vh] w-[85vw] flex-1 items-start gap-[20] bg-white">
        <Text className="self-start text-left text-4xl font-semibold text-colors-primary">
          Tell us
        </Text>
        <Text className="self-start text-left text-4xl font-semibold">more about yourself</Text>

        <TextInput
          keyboardType="default"
          className="mt-5 h-12 w-[100%] rounded-lg bg-gray-100 px-4 text-lg font-semibold "
          placeholder="First Name*"
          placeholderTextColor="#9CA3AF"
          value={formData.firstName}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, firstName: text }))}
        />
        <TextInput
          keyboardType="default"
          className=" h-12 w-[100%] rounded-lg bg-gray-100 px-4 text-lg font-semibold"
          placeholder="Last Name*"
          placeholderTextColor="#9CA3AF"
          value={formData.lastName}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, lastName: text }))}
        />
        <TextInput
          keyboardType="default"
          className=" h-12 w-[100%] rounded-lg bg-gray-100 px-4 text-lg font-semibold"
          placeholder="Username*"
          placeholderTextColor="#9CA3AF"
          value={formData.username}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, username: text }))}
        />
        <TextInput
          keyboardType="default"
          className=" h-12 w-[100%] rounded-lg bg-gray-100 px-4 text-lg font-semibold"
          placeholder="E-mail*"
          placeholderTextColor="#9CA3AF"
          value={formData.email}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
        />
        <TextInput
          keyboardType="default"
          className=" h-12 w-[100%] rounded-lg bg-gray-100 px-4  font-semibold"
          secureTextEntry={true}
          placeholder="Password*"
          placeholderTextColor="#9CA3AF"
          value={formData.password}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, password: text }))}
        />
        <TextInput
          keyboardType="default"
          className=" h-12 w-[100%] items-center justify-center  rounded-lg bg-gray-100 px-4  font-semibold"
          placeholder="Password*"
          secureTextEntry={true}
          placeholderTextColor="#9CA3AF"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {error && <Text className="w-full text-center text-red-500">{error}</Text>}

        <ConditionalButton
          disabled={isButtonDisabled}
          onPress={onSubmit}
          title="Let's Begin"
          className="absolute bottom-0 w-full"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
