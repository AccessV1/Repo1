import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { countries } from 'app/components/ui/CountryCodeSelector/countriesToDownload';

function CountryCodeSelect() {
  return (
    <View style={styles.container}>
        <TextInput
          value='+1'
          style={styles.text}
          />
    </View>
  )
}

export default CountryCodeSelect

const styles = StyleSheet.create({
    container: {
            marginVertical: 'auto'
    },

    text: {
        fontSize: 16,
    }
})

