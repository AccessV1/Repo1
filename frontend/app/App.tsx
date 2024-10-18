import '../global.css';

import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import { MainStack } from './navigation/MainStack';
import { useAuthStore } from './globalStore/authStore';
import ServiceLocationScreen from './screens/ServiceLocationScreen';

export default function App() {
  const { isLoggedIn } = useAuthStore();
  return <NavigationContainer>{isLoggedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
  // return <ServiceLocationScreen />
}
