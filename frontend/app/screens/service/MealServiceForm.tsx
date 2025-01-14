import React from 'react';
import { ScrollView } from 'react-native';
import MealInfoStep from './homemadeMeal/MealInfoStep';
import ScheduleStep from './homemadeMeal/ScheduleStep';
// import MyKitchenStep from './steps/MyKitchenStep';
// import PaymentStep from './steps/PaymentStep';
// import OverviewStep from './steps/OverviewStep';

interface MealServiceFormProps {
  steps: number;
  data: any;
  onUpdateData: (updatedData: any) => void;
}

const MealServiceForm: React.FC<MealServiceFormProps> = ({ steps, data, onUpdateData }) => {
  const renderStepContent = () => {
    switch (steps) {
      case 1:
        return <MealInfoStep />;
      case 2:
        return <ScheduleStep />;
      // case 3:
      //   return <MyKitchenStep data={data.kitchen} onUpdateData={onUpdateData} />;
      // case 4:
      //   return <PaymentStep data={data.payment} onUpdateData={onUpdateData} />;
      // case 5:
      //   return <OverviewStep data={data} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 2 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {renderStepContent()}
    </ScrollView>
  );
};

export default MealServiceForm;
