import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ConditionalButton from 'app/components/ui/ConditionalButton';

/***
 * -ALERT change this to use formData value of name from props when the parent component is made
 */
export const NameInputScreen = () => {
    const [name, setName] = useState<string>('');
    

  const isButtonDisabled = name.trim() === '';

  const handlePress = () => {
    if (!isButtonDisabled) {
      console.log(`User's name is: ${name}`);
      // Handle form submission logic
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="mx-10 mt-[25vh] w-[85vw] flex-1 items-start gap-[20] bg-white">
        <Text className="self-start text-left text-4xl font-semibold">What</Text>
        <Text className="self-start text-left text-4xl font-semibold">should we call you?</Text>

        <TextInput
          keyboardType="default"
          className="mt-5 h-12 w-[100%] rounded-lg bg-gray-100 px-4 text-lg"
          placeholder="Enter your name"
          placeholderTextColor="#C4C4C4"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <ConditionalButton disabled={isButtonDisabled} title="Let's Begin" className="w-full absolute bottom-0" />
      </View>
    </TouchableWithoutFeedback>
  );
};
