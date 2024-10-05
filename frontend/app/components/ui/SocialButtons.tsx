import { View } from 'react-native';
import SocialButton from './SocialButton';

const SocialButtons = ({ socials }: { socials: Array<{ name: string; img: unknown }> }) => {
  return (
    <View className="mx-auto flex-row gap-[30] pt-[10]">
      {socials.map((social, index) => {
        return <SocialButton key={index} img={social.img} />;
      })}
    </View>
  );
};
export default SocialButtons;
