import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootLayout } from 'app/layouts/RootLayout';
import React from 'react';
import { SplashScreen } from 'app/components/layout/SplashScreen';
import { HomeScreen } from 'app/screens/HomeScreen';
import { fadeTransition } from 'app/utils';
export type MainStackParamList = {
  splash: undefined;
  home: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

type MainScreen = { name: keyof MainStackParamList; component: () => React.JSX.Element };

const mainScreens: MainScreen[] = [{ name: 'home', component: HomeScreen }];

export const MainStack = () => {
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
        children={(props: any) => <SplashScreen {...props} route="home" />} // Redirect to 'login'
      />
      {mainScreens.map((screen: MainScreen) => (
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Image className="ml-5 " source={require('../assets/images/backArrow.png')} />
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
