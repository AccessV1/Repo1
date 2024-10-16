import ConditionalButton from 'app/components/ui/ConditionalButton';
import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';

interface FormData {
  emailOrUsername: string;
  password: string;
}
export const LoginWithEmailOrUsernameScreen = () => {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [formData, setFormData] = React.useState<FormData>({
    emailOrUsername: '',
    password: '',
  });

  React.useEffect(() => {
    // Disable the button if either field is empty
    const isFormComplete = formData.emailOrUsername !== '' && formData.password !== '';

    // Only update if there's a change
    if (isButtonDisabled !== !isFormComplete) {
      setIsButtonDisabled(!isFormComplete);
    }
  }, [formData]);
  return (
    <View className="m-auto h-full w-[80vw] flex-1 gap-1  pt-[50] ">
      <Image
        className="mx-auto h-[218] w-[218]"
        source={require('../assets/images/openlogo1.png')}
        resizeMode="contain"
      />

      <Text className="pb-[10] font-[600]">Email or Username</Text>
      <View className="mb-[10]  w-full  flex-row rounded-[8] bg-colors-lightGray p-[10] font-[600]">
        <TextInput
          className=" w-full py-1 font-[600]"
          value={formData.emailOrUsername}
          onChangeText={(text) =>
            setFormData((prevFormData) => ({ ...prevFormData, emailOrUsername: text }))
          }
          keyboardType="default"
          returnKeyType="done"
          placeholder="Enter your email or username"
        />
      </View>
      <Text className="pb-[10]  font-[600]">Password</Text>
      <View className="mb-[10]  flex-row rounded-[8] bg-colors-lightGray p-[10] font-[600]">
        <TextInput
          className=" w-full py-1  font-[600]"
          value={formData.password}
          onChangeText={(text) =>
            setFormData((prevFormData) => ({ ...prevFormData, password: text }))
          }
          keyboardType="visible-password"
          returnKeyType="done"
          secureTextEntry={true}
          placeholder="Enter your password"
        />
      </View>
      <ConditionalButton
        className="mt-5 w-full"
        disabled={isButtonDisabled}
        onPress={() => {}}
        title="Sign in"
      />
    </View>
  );
};
