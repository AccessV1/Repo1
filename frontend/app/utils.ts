import * as Location from 'expo-location';
import { Alert } from 'react-native';

interface LocationObject {
  coords: {
    latitude: number;
    longitude: number;
  };
}

/**
 * @function formatPhoneNumber
 * @description Formats a phone number by removing non-numeric characters and adding spaces at appropriate positions.
 * This function cleans the input and splits it into groups for better readability, e.g. "1234567890" becomes "123 456 7890".
 *
 * @param {string} phoneNumber - The phone number string to be formatted.
 *
 * @returns {string} The formatted phone number with spaces between groups of digits.
 */
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters

  // Match and format the cleaned number with spaces
  const match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,4})?/);

  if (match) {
    const part1 = match[1] ? `${match[1]}` : '';
    const part2 = match[2] ? ` ${match[2]}` : '';
    const part3 = match[3] ? ` ${match[3]}` : '';
    return `${part1}${part2}${part3}`.trim(); // Trim any extra spaces
  }
  return phoneNumber;
};

export const serializePhoneNumber = (phoneNumber: string, countryCode: string) => {
  return `+${countryCode}${phoneNumber.replace(/\s+/g, '')}`;
};

export const isNumeric = (input: string): boolean => {
  const regex = /^\d+$/;
  return regex.test(input);
};

// LocationServices

export const getCurrentLocation = async (): Promise<LocationObject | null> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Location permission is required for this feature');
    return null;
  }

  let currentLocation = await Location.getCurrentPositionAsync({});
  return currentLocation as LocationObject;
};

export const getNeighborhood = async (location: LocationObject | null): Promise<string> => {
  if (!location) return 'Unknown Neighborhood';

  let reverseGeocode = await Location.reverseGeocodeAsync({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });

  if (reverseGeocode.length > 0) {
    return reverseGeocode[0].subregion || 'Unknown Neighborhood';
  }

  return 'Unknown Neighborhood';
};
