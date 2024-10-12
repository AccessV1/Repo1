import { SafeAreaView, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import '../../global.css';
interface RootLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children, style }): React.ReactNode => {
  return (
    <SafeAreaView className="h-full items-center justify-center">
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};
