import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { countries } from 'app/components/ui/CountryCodeSelector/data';

function CountryCodeSelect() {
    const [countryCode, setCountryCode] = useState<string>('1');
  return (
    <View style={styles.container}>
        <Text>+</Text>
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
        minWidth: 15,
        maxWidth: 50,
        fontSize: 16,
    },

    img: {
        width: 8,
        height: 18
    }
})

