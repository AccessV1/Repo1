import { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Dimensions } from 'react-native';
import { appColors, globalStyles } from 'app/globalStyles';
import Button1 from 'app/components/ui/Button1';
import SocialButton from 'app/components/ui/SocialButton';
const socials = [
  { name: 'Google', img: require('../assets/images/googlelogo.png') },
  { name: 'Facebook', img: require('../assets/images/facebooklogo.png') },
  { name: 'applelogo', img: require('../assets/images/applelogo.png') },
];

// TO DO: ADD AREA PREFIX WITH FLAG FOR PHONE NUMBER INPUT
const { width, height } = Dimensions.get('window');
function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    phoneNumber?.length === 10 ? setDisabled(false) : setDisabled(true);
  }, [phoneNumber]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img1}
        source={require('../assets/images/openlogo1.png')}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.p}>Phone Number</Text>
        <View style={styles.phone}>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter your phone number"
          />
        </View>
        <Button1 disabled={disabled} title="Get Verification Code" />
      </View>

      <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 55 }]}>OR</Text>
      <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 10 }]}>Sign in with</Text>

      <View style={styles.socials}>
        {socials.map((social, index) => {
          return <SocialButton key={index} img={social.img} />;
        })}
      </View>

      <View style={{flexDirection: 'row', }}>
      <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 30, color: appColors.gray }]}>Create a New Account? <Text style={[styles.p, { color: appColors.primary,  marginHorizontal: 'auto', paddingTop: 10 }]}>Sign Up</Text></Text>
      </View>
      
    </View>
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
    width: width * 0.9,
    height: 50,
    backgroundColor: appColors.lightGray,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
  },
  phone: {
    paddingBottom: 20,
  },

  socials: {
    marginHorizontal: 'auto',
    paddingTop: 10,
    flexDirection: 'row',
    gap: 30,
  },
});
