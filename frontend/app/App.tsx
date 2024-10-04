import { View, Text } from 'react-native';

import { RootLayout } from './layouts/RootLayout';
import '../global.css';

export default function App() {
  return (
    <RootLayout style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text className="text-5xl text-green-100">The Access App</Text>
    </RootLayout>
  );
}
