import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type HeaderProps = {
  title: string;
  onBackPress: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onBackPress }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} className="mb-6">
    <TouchableOpacity onPress={onBackPress} style={{ marginRight: 10 }} className="absolute">
      <AntDesignIcon name="arrowleft" size={20} color="black" />
    </TouchableOpacity>

    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </View>
  </View>
);

export default Header;
