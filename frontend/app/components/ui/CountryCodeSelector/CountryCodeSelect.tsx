import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import flagImages from "./data/flagImages";
import countries from './data/countries.json'
function CountryCodeSelect() {
    const [countryCode, setCountryCode] = useState<string>('1');
    const [countryImg, setCountryImg] = useState<any>(flagImages['us']);

    useEffect(() => {
        const country = countries.find((country) => country.dial_code === `+${countryCode}`);
        if (country && flagImages[country.code.toLowerCase()]) {
          setCountryImg(flagImages[country.code.toLowerCase()]);
        } else {
          setCountryImg(null); // Fallback to US flag if code not found
        }
      }, [countryCode]);
  return (
    <View style={styles.container}>
        <View style={styles.flagContainer}><Image style={styles.flag}  source={countryImg} /></View>
        <Text style={{marginVertical: 'auto', fontWeight: 600}}>+ </Text>
        <TextInput
        maxLength={3}
          value={countryCode}
        onChangeText={setCountryCode}
          style={styles.input}
          />
        <Image resizeMode='contain' style={styles.img} source={require("../../../assets/images/down-arrow.png")}  />
    </View>
  )
}

export default CountryCodeSelect

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
            marginVertical: 'auto'
    },

    input: {
        fontWeight:'600',
        minWidth: 15,
        maxWidth: 50,
        fontSize: 16,
    },

    img: {
        marginVertical: 'auto',
        width: 8,
        height: 8
    },

    flag: {
        width:24,
        height: 24
    },
    flagContainer: { 
        marginRight: 10,
        borderRadius: 100,
        overflow: 'hidden',
    }
})

