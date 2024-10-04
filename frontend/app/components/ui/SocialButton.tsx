import { View, Image } from 'react-native';

// ADD ONPRESS FUNCTIONALITY
function SocialButton({ img }: { img: any }) {
  return (
    <View className="border-colors-lightGray h-[47.36] w-[47.36] rounded-[12] border-[2px] ">
      <Image className="m-auto h-[24] w-[24] " source={img} resizeMode="contain" />
    </View>
  );
}

export default SocialButton;
