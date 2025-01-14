import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import Header from '../components/ui/ServiceForm/Header';
import ProgressBar from '../components/ui/ServiceForm/ProgressBar';
import NavigationButtons from '../components/ui/ServiceForm/NavigationButtons';
import MealServiceForm from './service/MealServiceForm';

const ServiceFormScreen: React.FC = ({ navigation, category = 'meal' }) => {
  const isEdit = false;
  const methods = useForm({ defaultValues: { name: '', description: '', price: '' } });
  const [step, setStep] = useState(1);

  const onNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const onPrevious = () => setStep((prev) => Math.max(prev - 1, 1));
  const onSubmit = methods.handleSubmit((data) => {
    if (isEdit) {
    } else {
    }
  });

  return (
    <FormProvider {...methods}>
      <View className="flex-1 px-2 pt-8">
        <Header
          title={isEdit ? 'Edit Service' : 'Add a Service'}
          onBackPress={() => navigation.goBack()}
        />
        <ProgressBar currentStep={step} totalSteps={4} />
        <ScrollView
          contentContainerStyle={{ padding: 16, flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <MealServiceForm steps={step} />
        </ScrollView>
        <View className="px-6">
          <NavigationButtons
            step={step}
            totalSteps={4}
            onPrevious={onPrevious}
            onNext={onNext}
            onSubmit={onSubmit}
            canProceed
          />
        </View>
      </View>
    </FormProvider>
  );
};

export default ServiceFormScreen;
