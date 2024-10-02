import {useState, useEffect} from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Dimensions } from 'react-native';
import { appColors } from 'app/globalStyles';
import Button1 from 'app/components/ui/Button1';

// TO DO: ADD AREA PREFIX WITH FLAG FOR PHONE NUMBER INPUT
const { width, height } = Dimensions.get('window');
function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null)
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
          <TextInput style={styles.input} placeholder="Enter your phone number" />
        </View>
        <Button1 title='Get Verification Code' />
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
  }
});
