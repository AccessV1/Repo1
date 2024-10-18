import React, { useState, useRef } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { getCurrentLocation, getNeighborhood } from 'app/utils';

const { width } = Dimensions.get('window');
const dynamicWidth = width * 0.9;

interface LocationObject {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function ServiceLocationScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);

  // animated values for fading effects
  const locationIconOpacity = useRef(new Animated.Value(1)).current;
  const buttonsOpacity = useRef(new Animated.Value(1)).current;
  const neighborhoodOpacity = useRef(new Animated.Value(0)).current;

  const handleGetLocation = async () => {
    // Fade out the location icon and buttons
    Animated.timing(locationIconOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonsOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(async () => {
      setIsHidden(true);

      // Grab users current location (grabs coords)
      const currentLocation = await getCurrentLocation();
      if (currentLocation) {
        setLocation(currentLocation);

        // reversegeo to convert coords to name of neighborhood
        const neighborhoodName = await getNeighborhood(currentLocation);
        setNeighborhood(neighborhoodName);

        Animated.timing(neighborhoodOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  return (
    <View className="m-auto flex-1 pt-[50]" style={{ width: dynamicWidth }}>
      <View>
        <Text className="mx-10 pb-5 pt-[60] text-left text-3xl font-[600] text-[15] text-black">
          Where
        </Text>
        <Text className="mx-auto pb-5 text-left text-3xl font-[600] text-[15] text-black">
          Do you want your service?
        </Text>
      </View>

      {!isHidden && (
        <Animated.View
          className="mb-65 mx-auto flex-1 justify-center"
          style={{ opacity: locationIconOpacity }}>
          <Image
            className="mx-auto mb-10 h-[230] w-[230]"
            source={require('../assets/images/LocationIcon.png')}
            resizeMode="contain"
          />
        </Animated.View>
      )}

      {!isHidden && (
        <Animated.View style={{ opacity: buttonsOpacity }}>
          <View className="mb-10 gap-2">
            <TouchableOpacity
              className="mx-4 rounded-lg bg-colors-primary px-1 py-3"
              onPress={handleGetLocation}>
              <Text className="text-center text-xl text-white">Use my current location</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mx-4 rounded-lg px-1 py-3">
              <Text className="text-center text-xl font-bold text-colors-primary">
                I'll add my location manually
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      {location && (
        <Animated.View style={{ opacity: neighborhoodOpacity, flex: 1, justifyContent: 'center' }}>
          {neighborhood ? (
            <View className="gap-10">
              <Text className="text-center text-3xl font-bold text-colors-primary">
                {neighborhood}
              </Text>
              <Text className="text-center text-xl font-bold text-black">Is this correct?</Text>
            </View>
          ) : null}
        </Animated.View>
      )}
    </View>
  );
}

export default ServiceLocationScreen;
