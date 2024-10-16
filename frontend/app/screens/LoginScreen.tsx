import { useState, useEffect } from 'react';
import ConditionalButton from 'app/components/ui/ConditionalButton';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
import SocialButtons from 'app/components/ui/SocialButtons';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useAuthStore } from 'app/globalStore/authStore';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'app/navigation/AuthStack';
import type { StackNavigationProp } from '@react-navigation/stack';
import { serializePhoneNumber } from 'app/utils';
import { API_URL } from 'app/apiUrl';
import clsx from 'clsx';
const socials: Array<{ name: string; img: any }> = [
  { name: 'Google', img: require('../assets/images/googlelogo.png') },
  { name: 'Facebook', img: require('../assets/images/facebooklogo.png') },
  { name: 'applelogo', img: require('../assets/images/applelogo.png') },
];

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsive design
const dynamicWidth = width * 0.9; // react native doesnt support vw so we have to save a dynamic width we want to use

function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { phoneNumber, setPhoneNumber, countryCode} = useAuthStore();

  const [phoneNumberNotFound, setPhoneNumberNotFound] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // State to track if the button should be disabled

  useEffect(() => {
    if (phoneNumber && phoneNumber.length === 12) {
      setIsButtonDisabled(false);
      Keyboard.dismiss();
    } else {
      setIsButtonDisabled(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (phoneNumberNotFound) {
      setPhoneNumberNotFound(false);
    }
  }, [phoneNumber]);

  const handleSendVerificationCode = async () => {
    if (phoneNumber) {
      try {
        const res = await fetch(
          `${API_URL}/auth/isPhoneNumberLinkedToUser/${serializePhoneNumber(phoneNumber, countryCode)}`
        );
        const { isPhoneNumberLinkedToUser } = await res.json();
        if (!isPhoneNumberLinkedToUser) {
          setPhoneNumberNotFound(true);
        } else {
          navigation.navigate('verifyPhoneNumber');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    // TouchableWithoutFeedback is used to dismiss the keyboard when tapping outside the input field
    <TouchableWithoutFeedback className="" onPress={Keyboard.dismiss} accessible={false}>
      <View className="m-auto  flex-1 pt-[50]" style={{ width: dynamicWidth }}>
        {/* Logo image */}
      
        <Image
        style= {{width: 218, height: height * 0.2}}
          className="mx-auto mb-10 h-[218] w-[218]"
          source={require('../assets/images/openlogo1.png')}
          resizeMode="contain"
        />

        <View className="items-center justify-center">
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
          {/* Custom Button component; disabled when phone number is not valid */}

          <Text className={`mb-5 text-red-600 ${phoneNumberNotFound ? '' : 'hidden'}`}>
            Phone number not found
          </Text>
          <ConditionalButton
            className="w-full"
            disabled={isButtonDisabled}
            onPress={handleSendVerificationCode}
            title="Get Verification Code"
          />
          <TouchableOpacity onPress={() => navigation.navigate('loginWithEmailOrUsername')}>
            <Text className=" pt-[25] text-gray-500 underline">
              Use email or username instead
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{paddingTop: height * 0.06, paddingBottom: height *0.05 } } className="mx-auto  font-[600] text-[15] text-black">OR</Text>

        <Text className="mx-auto  pb-5 font-[600] text-[15] text-black">Sign in with</Text>

        {/* component for login with Google, Facebook, etc. */}
        <SocialButtons socials={socials} />

        {/* Link to sign up for new users */}
        <View className="flex-row items-center justify-center pt-[30]">
          <Text className="  font-[600] text-[15] text-colors-gray">
            Don't have an account yet ?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('phoneNumberRegistration')}>
            <Text className="  font-[600] text-[15] text-colors-primary">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
