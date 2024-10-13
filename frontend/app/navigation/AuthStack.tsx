import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'app/screens/LoginScreen';
import { PhoneNumberVerificationScreen } from 'app/screens/PhoneNumberVerificationScreen';
import { RootLayout } from 'app/layouts/RootLayout';
import React from 'react';

export type AuthStackParamList = {
  login: undefined;
  verifyPhoneNumber: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

type AuthScreen = { name: keyof AuthStackParamList; component: () => React.JSX.Element };

const authScreens: AuthScreen[] = [
  { name: 'login', component: LoginScreen },
  {
    name: 'verifyPhoneNumber',
    component: PhoneNumberVerificationScreen,
  },
];

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'white', 
          elevation: 0, 
          shadowOpacity: 0, 
        },
      }}>
      {authScreens.map((screen: AuthScreen) => (
          <Stack.Screen
          key={screen.name}
          name={screen.name}
          // since we are passing in a function, using the component prop would cause lose of component state on rerender, so we pass the contents in the children prop instead
          children={(props: {}) => (
            <RootLayout className="bg-white">
              <screen.component {...props} />
            </RootLayout>
          )}
        />
      ))}
    </Stack.Navigator>
  );
};
