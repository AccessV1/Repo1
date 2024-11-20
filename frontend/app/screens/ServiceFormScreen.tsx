// screens/ServiceFormScreen.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import Header from '../components/ui/ServiceForm/Header';
import ProgressBar from '../components/ui/ServiceForm/ProgressBar';
import NavigationButtons from '../components/ui/ServiceForm/NavigationButtons';
import Label from 'app/components/ui/Label';
import ImageUploadBox from 'app/components/ui/ImageUploadBox';

const ServiceFormScreen: React.FC = ({ navigation, category = "Meal"}) => {
  // const { isEdit, serviceId } = route.params;
  const isEdit = false;
  const methods = useForm({ defaultValues: { name: '', description: '', price: '' } });
  const [step, setStep] = useState(1);

  const onNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const onPrevious = () => setStep((prev) => Math.max(prev - 1, 1));
  const onSubmit = methods.handleSubmit((data) => {
    if (isEdit) {
      // Update service logic
    } else {
      // Create service logic
    }
  });

  return (
    <FormProvider {...methods}>
      <View style={{ flex: 1, padding: 16 }}>
        <Header
          title={isEdit ? 'Edit Service' : 'Add a Service'}
          onBackPress={() => navigation.goBack()}
        />
        <ProgressBar currentStep={step} totalSteps={4} />
        <Label title={`About ${category}`}/>
        <ImageUploadBox/>
        <NavigationButtons
          step={step}
          totalSteps={4}
          onPrevious={onPrevious}
          onNext={onNext}
          onSubmit={onSubmit}
          canProceed
        />
      </View>
    </FormProvider>
  );
};

export default ServiceFormScreen;
