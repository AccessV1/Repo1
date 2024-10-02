import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { appColors, globalStyles } from 'app/globalStyles';
import Button1 from 'app/components/ui/Button1';
import SocialButton from 'app/components/ui/SocialButton';
import CountryCodeSelect from 'app/components/ui/CountryCodeSelector/CountryCodeSelect';
import { formatPhoneNumber } from 'app/utils';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
const socials = [
  { name: 'Google', img: require('../assets/images/googlelogo.png') },
  { name: 'Facebook', img: require('../assets/images/facebooklogo.png') },
  { name: 'applelogo', img: require('../assets/images/applelogo.png') },
];


const { width, height } = Dimensions.get('window');
function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [disabled, setDisabled] = useState<boolean>(true);
  


  const handlePhoneChange = (text: string) => {
    const formattedPhoneNumber = formatPhoneNumber(text);
    setPhoneNumber(formattedPhoneNumber);
  };
  useEffect(() => {
    if (phoneNumber && phoneNumber.length === 12) {
      setDisabled(false);
      Keyboard.dismiss();
    } else {
      setDisabled(true);
    }
  }, [phoneNumber]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          style={styles.img1}
          source={require('../assets/images/openlogo1.png')}
          resizeMode="contain"
        />
        <View>
         <PhoneNumberInput  phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
          <Button1 disabled={disabled} title="Get Verification Code" />
        </View>

        <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 55 }]}>OR</Text>
        <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 10 }]}>Sign in with</Text>

        <View style={styles.socials}>
          {socials.map((social, index) => {
            return <SocialButton key={index} img={social.img} />;
          })}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[styles.p, { marginHorizontal: 'auto', paddingTop: 30, color: appColors.gray }]}>
            Create a New Account?{' '}
            <Text
              style={[
                styles.p,
                { color: appColors.primary, marginHorizontal: 'auto', paddingTop: 10 },
              ]}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flex: 1,
    paddingTop: 50,
  },
  img1: {
    marginHorizontal: 'auto',
    width: 218,
    height: 218,
    marginBottom: 50,
  },

  p: {
    fontWeight: '600',
    fontSize: 15,
    color: 'black',
    paddingBottom: 10,
  },

  input: {
    marginBottom: 20,
    flexDirection: 'row',
    width: width * 0.9,
    height: 50,
    backgroundColor: appColors.lightGray,

    borderRadius: 8,
    padding: 10,
  },

  socials: {
    marginHorizontal: 'auto',
    paddingTop: 10,
    flexDirection: 'row',
    gap: 30,
  },
});
