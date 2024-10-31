import { View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'app/screens/LoginScreen';
import { PhoneNumberVerificationScreen } from 'app/screens/PhoneNumberVerificationScreen';
import { RootLayout } from 'app/layouts/RootLayout';
import React from 'react';
import { LoginWithEmailOrUsernameScreen } from 'app/screens/LoginWithEmailOrUsernameScreen';
import { PhoneNumberLoginAndRegistrationScreen } from 'app/screens/PhoneNumberRegistrationScreen';
import { AdditionalRegistrationInfoScreen } from 'app/screens/AdditionalRegistrationInfoScreen';
import { SplashScreen } from 'app/components/layout/SplashScreen';
import { fadeTransition } from 'app/utils';

export type AuthStackParamList = {
  splash: undefined;
  login: undefined;
  verifyPhoneNumber: undefined;
  loginWithEmailOrUsername: undefined;
  phoneNumberLoginAndRegistration: undefined;
  additionalRegistrationInfo: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

type AuthScreen = { name: keyof AuthStackParamList; component: () => React.JSX.Element };

const authScreens: AuthScreen[] = [
  { name: 'login', component: LoginScreen },
  {
    name: 'verifyPhoneNumber',
    component: PhoneNumberVerificationScreen,
  },
  { name: 'loginWithEmailOrUsername', component: LoginWithEmailOrUsernameScreen },
  { name: 'phoneNumberLoginAndRegistration', component: PhoneNumberLoginAndRegistrationScreen },
  {
    name: 'additionalRegistrationInfo',
    component: AdditionalRegistrationInfoScreen,
  },
];

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        ...fadeTransition,
      }}>
      <Stack.Screen
        name="splash"
        options={{ headerShown: false }}
        children={(props: any) => <SplashScreen {...props} route="login" />} // Redirect to 'login'
      />
      {authScreens.map((screen: AuthScreen) => (
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Image
                className="ml-5 h-[20] w-[24]"
                source={require('../assets/images/backArrow.png')}
              />
            ),
          }}
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
