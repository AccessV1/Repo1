import { useState, useEffect } from 'react';
import ConditionalButton from 'app/components/ui/ConditionalButton';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
import SocialButtons from 'app/components/ui/SocialButtons';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';

const socials: Array<{ name: string; img: any }> = [
  { name: 'Google', img: require('../assets/images/googlelogo.png') },
  { name: 'Facebook', img: require('../assets/images/facebooklogo.png') },
  { name: 'applelogo', img: require('../assets/images/applelogo.png') },
];

const { width } = Dimensions.get('window'); // Get screen dimensions for responsive design
const dynamicWidth = width * 0.9; // react native doesnt support vw so we have to save a dynamic width we want to use

function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(); // State to hold the phone number input
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // State to track if the button should be disabled

  useEffect(() => {
    if (phoneNumber && phoneNumber.length === 12) {
      setIsButtonDisabled(false);
      Keyboard.dismiss();
    } else {
      setIsButtonDisabled(true);
    }
  }, [phoneNumber]);

  return (
    // TouchableWithoutFeedback is used to dismiss the keyboard when tapping outside the input field
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="m-auto flex-1 pt-[50]" style={{ width: dynamicWidth }}>
        {/* Logo image */}
        <Image
          className="mx-auto mb-10 h-[218] w-[218]"
          source={require('../assets/images/openlogo1.png')}
          resizeMode="contain"
        />

        <View>
          <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          {/* Custom Button component; disabled when phone number is not valid */}
          <ConditionalButton disabled={isButtonDisabled} title="Get Verification Code" />
        </View>

        <Text className="mx-auto pb-10 pt-[55] font-[600] text-[15] text-black">OR</Text>
        <Text className="mx-auto  pb-5 font-[600] text-[15] text-black">Sign in with</Text>

        {/* component for login with Google, Facebook, etc. */}
        <SocialButtons socials={socials} />

        {/* Link to sign up for new users */}
        <View className="flex-row">
          <Text className="text-colors-gray mx-auto pt-[30] font-[600] text-[15]">
            Create a New Account?{' '}
            <Text className="text-colors-primary mx-auto pt-10 font-[600] text-[15]">Sign Up</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
