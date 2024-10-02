import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialButton from './SocialButton';

const SocialButtons = ({ socials }) => {
  return (
    <View style={styles.socials}>
      {socials.map((social, index) => {
        return <SocialButton key={index} img={social.img} />;
      })}
    </View>
  );
};
export default SocialButtons;

const styles = StyleSheet.create({
  socials: {
    marginHorizontal: 'auto',
    paddingTop: 10,
    flexDirection: 'row',
    gap: 30,
  },
});
