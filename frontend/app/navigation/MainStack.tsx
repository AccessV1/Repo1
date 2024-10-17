import {Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootLayout } from 'app/layouts/RootLayout';
import React from 'react';

import { HomeScreen } from 'app/screens/HomeScreen';

export type MainStackParamList = {
  home: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

type MainScreen = { name: keyof MainStackParamList; component: () => React.JSX.Element };

const mainScreens: MainScreen[] = [{ name: 'home', component: HomeScreen }];

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      {mainScreens.map((screen: MainScreen) => (
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Image className="ml-5" source={require('../assets/images/backArrow.png')} />
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
