import { SafeAreaView, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import '../../global.css';
interface RootLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  style,
  className,
}): React.ReactNode => {
  return (
    <SafeAreaView className={`h-full items-center   ${className}`}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};
