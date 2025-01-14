// components/ProgressBar.tsx
import React from 'react';
import { View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <View className="w-full flex-row items-center justify-between py-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;

        return (
          <View key={step} className="flex-row items-center">
            {/* Circle Node */}
            <View
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                isCompleted
                  ? 'border-black bg-black'
                  : isActive
                    ? 'border-black'
                    : 'border-gray-400'
              }`}>
              {isCompleted ? (
                <AntDesignIcon name="check" size={16} color="white" />
              ) : (
                <View className={`h-3 w-3 rounded-full ${isActive ? 'bg-black' : 'bg-gray-400'}`} />
              )}
            </View>

            {/* Connecting Line */}
            {step < totalSteps && (
              <View
                className={`h-0.5 ${isCompleted ? 'bg-black' : 'bg-gray-400'}`}
                style={{
                  width: 9, // Adjust this value to control line width, ensuring it meets the next circle
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ProgressBar;
