import { View, Text, Image } from 'react-native';
import SplashScreenLib from 'react-native-splash-screen';
import { useEffect } from 'react';
export const SplashScreen = ({ navigation, route }: { navigation: any; route: string }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(route);
    }, 1000);
  }, [navigation]);

  return (
    <View className="h-screen w-screen bg-black">
      <Image
        resizeMode="contain"
        style={{ width: 230 }}
        className=" m-auto h-auto"
        source={require('../../assets/images/divno_logo_white.png')}></Image>
    </View>
  );
};
