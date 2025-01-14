import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Label from 'app/components/ui/Label';
import ImageUploadBox from 'app/components/ui/ImageUploadBox';
import FormBox from 'app/components/ui/FormBox';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface MealInfoStepProps {
  steps: number;
  data: any;
  onUpdateData: (updatedData: any) => void;
}

const MealInfoStep: React.FC<MealInfoStepProps> = ({ steps }) => {
  const [additions, setAdditions] = useState([{ itemName: '', price: '' }]);
  const [allowCustomization, setAllowCustomization] = useState(false);

  const handleRemoveAddition = (index: number) => {
    const updatedAdditions = additions.filter((_, i) => i !== index);
    setAdditions(updatedAdditions);
  };

  const handleToggleCheckbox = () => {
    setAllowCustomization(!allowCustomization);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 0 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <Label title="About Meal" />
      <FormBox title="Photo" isRequire components={<ImageUploadBox />} type="none" />
      <FormBox title="Title" isRequire type="text" placeholder="My meal is called..." />
      <FormBox
        title="Description"
        type="description"
        placeholder="Something you should also know..."
      />
      <FormBox
        title="Numbers of meal per day"
        isRequire
        type="number"
        placeholder="Enter the number of meals..."
      />
      <FormBox title="Price per meal ($)" isRequire type="price" placeholder="0.00" />
      <Text className="mt-3 text-xl">Do you have any additions to this meal?</Text>

      {additions &&
        additions.map((addition, index) => (
          <View key={index} className="my-1 flex-row items-center justify-between space-x-2">
            <View className="flex-1">
              <FormBox title="Item" isRequire type="text" placeholder="Enter Item name..." />
            </View>
            <View className="ml-2 w-1/3">
              <FormBox title="Price ($)" isRequire type="price" placeholder="0.00" />
            </View>
            <View className="items-end">
              <TouchableOpacity onPress={() => handleRemoveAddition(index)} className="p-2">
                <AntDesignIcon name="close" size={20} color="#E39A3A" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

      <TouchableOpacity
        onPress={() => setAdditions([...additions, { itemName: '', price: '' }])}
        className="my-4 flex-row items-center ">
        <AntDesignIcon name="plus" size={24} style={{ marginRight: 4, color: '#E39A3A' }} />
        <Text className="text-lg font-bold" style={{ color: '#E39A3A' }}>
          Add Item
        </Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row items-center">
        <TouchableOpacity onPress={handleToggleCheckbox} className="flex-row items-center">
          <View
            style={{
              backgroundColor: allowCustomization ? '#000' : 'transparent',
            }}
            className={`h-5 w-5 rounded border-2 ${
              allowCustomization ? 'border-black bg-black' : 'border-gray-500'
            } flex items-center justify-center`}>
            {allowCustomization && <AntDesignIcon name="check" size={14} color="white" />}
          </View>
          <Text className="ml-2 text-lg">Allow Customization</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MealInfoStep;
