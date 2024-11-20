import React from 'react';
import { View, Text } from 'react-native';

type LabelProps = {
    title: string;
};

const Label: React.FC<LabelProps> = ({ title }) => {
    return (
        <View className="border-l-4 border-yellow-500 pl-3 my-8">
            <Text className="text-2xl font-bold">{title}</Text>
        </View>
    );
};

export default Label;
