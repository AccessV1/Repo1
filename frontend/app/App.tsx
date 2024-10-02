import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { RootLayout } from './layouts/RootLayout';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <RootLayout style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <LoginScreen />
    </RootLayout>
  );
}