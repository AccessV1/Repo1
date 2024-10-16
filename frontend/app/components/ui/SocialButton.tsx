import * as WebBrowser from 'expo-web-browser';
import { View, TouchableOpacity, Image, Alert } from 'react-native';

const SocialButton = ({ img, name }: { img: any; name: string }) => {
  //Since backend is not deployed and we are developing on our laptops localhost:3000 won't work
  //So frontend aspect of Google and Facebook Oauth still don't work
  const handlePress = async () => {
    try {
      let url = '';

      if (name === 'Google') {
        url = 'http://localhost:3000/api/auth/google';
      } else if (name === 'Facebook') {
        url = 'http://localhost:3000/api/auth/facebook';
      }

      const result = await WebBrowser.openBrowserAsync(url);
      Alert.alert(`Data: ${result}`);
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="h-[47.36] w-[47.36] rounded-[12] border-[2px] border-colors-lightGray ">
        <Image className="m-auto h-[24] w-[24]" source={img} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
