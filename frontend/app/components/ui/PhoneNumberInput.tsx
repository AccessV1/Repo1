import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, Keyboard } from 'react-native';
import CountryCodeSelect from './CountryCodeSelector/CountryCodeSelect';
import { appColors } from 'app/globalStyles';
const { width } = Dimensions.get('window');
import { formatPhoneNumber } from 'app/utils';

const PhoneNumberInput = ({phoneNumber, setPhoneNumber}: any) => {

/**
 * @description Function to format the phone number before saving to state as the user types
 * @param text - The phone number input text
 * */ 
  const handlePhoneChange = (text: string) => {
    const formattedPhoneNumber = formatPhoneNumber(text); 
    setPhoneNumber(formattedPhoneNumber); 
  };

  return (  
    <View>
      <Text style={{fontWeight: 600, paddingBottom: 10}}>Phone Number</Text>
      <View style={styles.input}>
        <CountryCodeSelect />

        {/* Phone number input field */}
        <TextInput
        style={{paddingLeft: 10, fontWeight: '600'}}
          value={phoneNumber}
          onChangeText={handlePhoneChange} 
          keyboardType="numeric" 
          placeholder="Enter your phone number"
          maxLength={12}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  p: {
    fontWeight: 600,
    fontSize: 15,
    color: 'black',
    paddingBottom: 10,
  },
  input: {
    fontWeight: 600,
    marginBottom: 20,
    flexDirection: 'row',
    width: width * 0.9,
    height: 50,
    backgroundColor: appColors.lightGray,
    borderRadius: 8,
    padding: 10,
  },
});
