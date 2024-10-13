import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { RootLayout } from './layouts/RootLayout';
import '../global.css';
import { NameInputScreen } from './screens/NameInputScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { PhoneNumberVerificationScreen } from './components/ui/PhoneNumberVerificationScreen';
import ServiceLocationScreen from './screens/ServiceLocationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <ServiceLocationScreen/> */}
    </NavigationContainer>
  );
}
