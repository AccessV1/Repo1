import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');
const dynamicWidth = width * 0.9;

function ServiceLocationScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="m-auto flex-1 pt-[50]" style={{ width: dynamicWidth }}>
        <View>
          <Text className="mx-10 pb-5 pt-[60] text-left text-3xl font-[600] text-[15] text-black">
            Where
          </Text>
          <Text className="mx-auto pb-5 text-left text-3xl font-[600] text-[15] text-black ">
            Do you want your service?
          </Text>
        </View>
        {/* Location Icon Image */}
        <View className="mb-65 mx-auto flex-1 justify-center">
          <Image
            className="mx-auto mb-10 h-[230] w-[230]"
            source={require('../assets/images/LocationIcon.png')}
            resizeMode="contain"
          />
        </View>
        <View className="mb-10 gap-2">
          <TouchableOpacity className="mx-4 rounded-lg bg-colors-primary px-1 py-3">
            <Text className="text-center text-xl text-white">Use my current location</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mx-4 rounded-lg  px-1 py-3">
            <Text className="text-center text-xl font-bold text-colors-primary">
              I'll add my location manually
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ServiceLocationScreen;
