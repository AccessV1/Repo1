import dayjs from 'dayjs';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Label from 'app/components/ui/Label';
import ImageUploadBox from 'app/components/ui/ImageUploadBox';
import FormBox from 'app/components/ui/FormBox';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Calendar from 'app/components/ui/Calendar';

interface ScheduleStepProps {
  steps: number;
  data: any;
  onUpdateData: (updatedData: any) => void;
}

const ScheduleStep: React.FC<ScheduleStepProps> = ({ steps }) => {
  const [repeatWeekly, setRepeatWeekly] = useState(false);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const daysInMonth = endOfMonth.date();

  const handleToggleCheckbox = () => {
    setRepeatWeekly(!repeatWeekly);
  };

  const handleCalendarExpand = () => {
    setIsCalendarExpanded((prev) => !prev);
  };

  const handleSelectAll = () => {
    const allDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const currentMonthDates = allDates.map((day) => today.date(day).toDate());

    if (selectedDates.length === currentMonthDates.length) {
      setSelectedDates([]);
    } else {
      setSelectedDates(currentMonthDates);
    }
  };

  const isAllSelected = selectedDates.length === daysInMonth;

  return (
    <ScrollView
      contentContainerStyle={{ padding: 0 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <Label title="Schedule" />
      <View className="flex flex-row justify-between">
        <Text className={`mb-1 text-lg font-semibold `}>
          Serving On<Text className="text-red-500"> *</Text>
        </Text>
        <TouchableOpacity onPress={handleCalendarExpand}>
          <AntDesignIcon name="calendar" size={22} style={{ marginRight: 4 }} />
        </TouchableOpacity>
      </View>

      <Calendar
        repeatWeekly={repeatWeekly}
        selectedDates={selectedDates}
        onSelectDate={setSelectedDates}
        isExpanded={isCalendarExpanded}
      />

      <View className="mt-4 flex flex-row justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={handleToggleCheckbox} className="flex-row items-center">
            <View
              style={{
                backgroundColor: repeatWeekly ? '#000' : 'transparent',
              }}
              className={`h-5 w-5 rounded border-2 ${
                repeatWeekly ? 'border-black bg-black' : 'border-gray-500'
              } flex items-center justify-center`}>
              {repeatWeekly && <AntDesignIcon name="check" size={14} color="white" />}
            </View>
            <Text className="ml-2 text-lg">Repeat every week</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSelectAll}>
          <Text className="mb-1 text-lg font-semibold text-[#E39A3A]">
            {isAllSelected ? 'Deselect All' : 'Select All'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text className={`mb-4 mt-8 text-lg font-semibold `}>
        Serving Hours<Text className="text-red-500"> *</Text>
      </Text>
      <View className="my-1 flex-row items-center justify-between space-x-2">
        <View className="flex-1">
          <FormBox title="From" isRequire type="time" />
        </View>
        <View className="ml-2 w-1/2">
          <FormBox title="To" isRequire type="time" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ScheduleStep;
