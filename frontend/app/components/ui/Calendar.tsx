import dayjs from 'dayjs';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface CalendarProps {
  selectedDates: Date[];
  onSelectDate: (dates: Date[]) => void;
  repeatWeekly: boolean;
  isExpanded: boolean;
  onToggleRepeatWeekly: (repeat: boolean) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDates,
  onSelectDate,
  repeatWeekly,
  onToggleRepeatWeekly,
  isExpanded,
}) => {
  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();
  const daysFromPrevMonth = Array.from({ length: startDay }, (_, i) => i);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDaySelect = (day: number) => {
    const selectedDate = today.date(day).startOf('day');
    const isSelected = selectedDates.some((d) => dayjs(d).isSame(selectedDate, 'day'));

    if (isSelected) {
      onSelectDate(selectedDates.filter((d) => !dayjs(d).isSame(selectedDate, 'day')));
    } else {
      onSelectDate([...selectedDates, selectedDate.toDate()]);
    }
  };

  const renderWeekView = () => {
    const startIndex = startDay;

    const prevMonthDays = Array.from({ length: startIndex }, (_, i) => {
      return dayjs().subtract(1, 'month').endOf('month').date() - startIndex + i + 1;
    });

    const currentMonthDays = daysArray.slice(0, 7 - startIndex);

    const remainingDaysForNextMonth = 7 - prevMonthDays.length - currentMonthDays.length;
    const nextMonthDays = Array.from({ length: remainingDaysForNextMonth }, (_, i) => {
      return dayjs()
        .add(1, 'month')
        .startOf('month')
        .date(i + 1);
    });

    const daysInWeek = [
      ...prevMonthDays.map((day) => ({
        day: dayjs().subtract(1, 'month').date(day),
        type: 'prev',
      })),
      ...currentMonthDays.map((day) => ({
        day: today.date(day),
        type: 'current',
      })),
      ...nextMonthDays.map((day) => ({
        day: dayjs().add(1, 'month').startOf('month').date(day),
        type: 'next',
      })),
    ];

    return (
      <View>
        <View className="flex-row justify-between">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} className="flex-1 text-center text-sm text-gray-300">
              {day}
            </Text>
          ))}
        </View>

        <View className="mt-2 flex-row justify-between">
          {daysInWeek.map((dayObj, idx) => {
            const { day, type } = dayObj;

            const isSelected = selectedDates.some((d) => dayjs(d).isSame(day, 'day'));

            const isCurrentMonth = type === 'current';

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  if (isCurrentMonth) handleDaySelect(day.date());
                }}
                disabled={!isCurrentMonth}
                className={`mx-1 flex-1 items-center justify-center rounded-md border-gray-300 p-2 ${
                  isSelected
                    ? 'bg-black text-white'
                    : type === 'prev' || type === 'next'
                      ? 'border text-gray-300'
                      : 'border'
                }`}>
                <Text
                  className={`text-md text-center ${
                    isSelected
                      ? 'text-white'
                      : type === 'prev' || type === 'next'
                        ? 'text-gray-300'
                        : ''
                  }`}>
                  {day.date()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderMonthView = () => {
    const weeks = Math.ceil((daysFromPrevMonth.length + daysArray.length) / 7);

    const prevMonthDays = Array.from({ length: startDay }, (_, i) => {
      return dayjs().subtract(1, 'month').endOf('month').date() - startDay + i + 1;
    });

    const remainingDaysForNextMonth = weeks * 7 - (prevMonthDays.length + daysArray.length);

    const nextMonthDays = Array.from({ length: remainingDaysForNextMonth }, (_, i) => {
      return dayjs()
        .add(1, 'month')
        .startOf('month')
        .date(i + 1);
    });

    const calendarDays = [
      ...prevMonthDays.map((day) => ({
        day: dayjs().subtract(1, 'month').date(day),
        type: 'prev',
      })),
      ...daysArray.map((day) => ({ day: today.date(day), type: 'current' })),
      ...nextMonthDays.map((day) => ({
        day: day,
        type: 'next',
      })),
    ];

    return (
      <View>
        <View className="flex-row justify-between">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} className="flex-1 text-center text-sm text-gray-300">
              {day}
            </Text>
          ))}
        </View>

        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <View key={weekIndex} className="mt-2 flex-row justify-between">
            {calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7).map((date, idx) => (
              <TouchableOpacity
                key={idx}
                disabled={date.type !== 'current'}
                onPress={() => date.day && handleDaySelect(date.day.date())}
                className={`mx-1 h-10 flex-1 items-center justify-center rounded-lg border-gray-300 ${
                  selectedDates.some((d) => dayjs(d).isSame(date.day, 'day'))
                    ? 'bg-black text-white'
                    : date.type === 'next' || date.type === 'prev'
                      ? 'border text-gray-300'
                      : 'border'
                }`}>
                {date.day && (
                  <Text
                    className={`text-md text-center ${
                      selectedDates.some((d) => dayjs(d).isSame(date.day, 'day'))
                        ? 'text-white'
                        : date.type === 'next' || date.type === 'prev'
                          ? 'text-gray-300'
                          : ''
                    }`}>
                    {date.day.date()}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return <View>{isExpanded ? renderMonthView() : renderWeekView()}</View>;
};

export default Calendar;
