import React from 'react';
import { View, Text } from 'react-native';

type LabelProps = {
  title: string;
};

const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    <View className="my-8 border-l-4 border-[#E39A3A] pl-3">
      <Text className="text-2xl font-bold">{title}</Text>
    </View>
  );
};

export default Label;
