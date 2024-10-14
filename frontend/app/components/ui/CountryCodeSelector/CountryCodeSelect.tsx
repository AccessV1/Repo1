import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import flagImages from './data/flagImages'; // Image paths for country flags (mapped to require() statements)
import { ImageSourcePropType } from 'react-native';
import { useAuthStore } from 'app/globalStore/authStore';


const CountryCodeSelect: React.FC = () => {
  const {countryCode, setCountryCode} = useAuthStore()
  const [countryImg, setCountryImg] = useState<ImageSourcePropType | null>(flagImages['us']);

  useEffect(() => {
    const country = flagImages[`+${countryCode}`];
    if (country) {
      setCountryImg(country);
    } else {
      setCountryImg(null); // If no flag is found, set the flag to null
    }
  }, [countryCode]);

  return (
    <View className="my-auto flex-row">
      {/* If no code is found then dont show any flag */}
      <View className={`mr-[10] overflow-hidden  rounded-full  ${!countryImg && 'opacity-0'}`}>
        <Image className="h-[24] w-[24]" source={countryImg as ImageSourcePropType} />
      </View>
      <Text className="my-auto font-[600]">+ </Text>
      <TextInput
        maxLength={4}
        value={countryCode}
        onChangeText={setCountryCode}
        className="min-w-[15] max-w-[30] font-[600] text-[16]"
        style={{ color: 'black' }}
      />
      <Image
        className="my-auto h-[8] w-[8]"
        resizeMode="contain"
        source={require('../../../assets/images/down-arrow.png')}
      />
    </View>
  );
};

export default CountryCodeSelect;
