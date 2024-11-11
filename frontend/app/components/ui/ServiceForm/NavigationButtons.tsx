import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type NavigationButtonsProps = {
  step: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canProceed: boolean;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  step,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  canProceed,
}) => {
  return (
    <View className="mt-4 flex-row justify-between space-x-2">
      {/* Back Button */}
      <TouchableOpacity
        onPress={onPrevious}
        disabled={step === 1}
        className={`flex-row items-center rounded border-2 px-4 py-3 ${
          step === 1 ? 'border-gray-400 bg-white text-gray-400' : 'border-black bg-white text-black'
        }`}
        style={{ flexGrow: 1, marginRight: 10, justifyContent: 'center' }} // Center the content inside the button
      >
        <AntDesignIcon name="arrowleft" size={20} color={step === 1 ? 'gray' : 'black'} />
        <Text
          className={`ml-2 ${step === 1 ? 'text-gray-400' : 'text-black'}`}
          style={{ fontSize: 18 }}>
          Back
        </Text>
      </TouchableOpacity>
      {step < totalSteps ? (
        <TouchableOpacity
          onPress={onNext}
          disabled={!canProceed}
          className={`flex-row items-center rounded border-2 px-4 py-1 ${
            canProceed ? 'border-black text-black' : 'border-gray-400 text-gray-400'
          } bg-white`}
          style={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text
            className={`mr-2 ${canProceed ? 'text-black' : 'text-gray-400'}`}
            style={{ fontSize: 18 }}>
            Next
          </Text>

          <AntDesignIcon name="arrowright" size={20} color={canProceed ? 'black' : 'gray'} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onSubmit}
          className="flex-row items-center rounded border-2 border-black bg-white px-4 py-3"
          style={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text className="mr-2 text-black" style={{ fontSize: 20 }}>
            Submit
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavigationButtons;
