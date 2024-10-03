import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import flagImages from './data/flagImages';   // Image paths for country flags (mapped to require() statements)
import countries from './data/countries.json';
function CountryCodeSelect() {
  const [countryCode, setCountryCode] = useState<string>('1');
  const [countryImg, setCountryImg] = useState<any>(flagImages['us']);

     /** 
  * @description This useEffect hook sets the correct country flag image based on the country code. 
  * Since React Native requires static paths for images (using `require()`), we use a predefined mapping 
  * (in `flagImages.ts`) that links each country code to its flag image.
  */
  useEffect(() => {
    const country = flagImages[`+${countryCode}`];
    if (country) {
      setCountryImg(country);
    } else {
      setCountryImg(null); // If no flag is found, set the flag to null
    }
  }, [countryCode]);
  return (
    <View style={styles.container}>
        {/* If no code is found then dont show any flag */}
      <View style={[styles.flagContainer, !countryImg && {opacity: 0}]}>
        <Image style={styles.flag} source={countryImg} />
      </View>
      <Text style={{ marginVertical: 'auto', fontWeight: 600 }}>+ </Text>
      <TextInput
        maxLength={4}
        value={countryCode}
        onChangeText={setCountryCode}
        style={styles.input}
      />
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/images/down-arrow.png')}
      />
    </View>
  );
}

export default CountryCodeSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 'auto',
  },

  input: {
    fontWeight: '600',
    minWidth: 15,
    maxWidth: 30,
    fontSize: 16,
  },

  img: {
    marginVertical: 'auto',
    width: 8,
    height: 8,
  },

  flag: {
    width: 24,
    height: 24,
  },
  flagContainer: {
    marginRight: 10,
    borderRadius: 100,
    overflow: 'hidden',
  },
});
