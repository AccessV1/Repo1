import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, useWindowDimensions } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

type ImageUploadBoxProps = {
  onUpload: (imageUri: string) => void;
  placeholderText?: string; 
};

const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({ onUpload, placeholderText = "Upload your media here" }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);

  const requestImageLibraryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need permission to access your media library to select an image.');
      return false;
    }
    return true;
  };

  const handleSelectImage = async () => {
    const hasPermission = await requestImageLibraryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
    //   allowsEditing: true,
    //   aspect: [4, 3], 
      quality: 1,
    });

    if (!result.canceled) {
      const newImageUri = result.assets[0].uri;
      const newImageName = result.assets[0].fileName || "Unnamed Image";
      setImageUri(newImageUri);
      setImageName(newImageName);
      onUpload(newImageUri);
    }
  };

  const handleDeleteImage = () => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setImageUri(null);
            setImageName(null);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className={`${!imageUri? "border-2": ""} border-gray-500 border-dashed rounded-sm items-center`}>
      <TouchableOpacity
        onPress={handleSelectImage}
        className="w-full h-60 rounded-sm justify-center items-center"
      >
        {!imageUri ? (
            <View>
                <TouchableOpacity className="bg-black justify-center items-center py-5 px-8 rounded-full"
                onPress={handleSelectImage}
                >
                    <AntDesignIcon name="upload" size={20} color="white" />
                </TouchableOpacity>
                {!imageUri && (
                    <Text className="text-gray-700 mt-4 text-center text-xl">{placeholderText}</Text>
                )}
            </View>
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={{ width: '100%', height: '100%', borderRadius: 8 }}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>

      {imageUri && (
        <View className="mt-4 flex-row items-center justify-between w-full px-4">
          <View className="flex-row items-center">
            <AntDesignIcon name="picture" size={20} color="gray" />
            <Text className="ml-2 text-sm text-gray-700">{imageName}</Text>
          </View>
          <View className="flex-row items-center">
            {/* <AntDesignIcon name="checkcircleo" size={20} color="green" /> */}
            <TouchableOpacity onPress={handleDeleteImage}>
              <AntDesignIcon name="closecircleo" size={20} color="red" className="ml-2" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      
    </View>
  );
};

export default ImageUploadBox;
