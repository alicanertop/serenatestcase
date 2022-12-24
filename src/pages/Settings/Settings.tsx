import { format } from 'date-fns';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import RNDatepicker from 'react-native-date-picker';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: 'center', alignContent: 'center' },
  rnDatePickerContainer: { justifyContent: 'center', alignContent: 'center' },
  font: { fontSize: 13, textAlign: 'center' },
});

const isSunday = (date: Date) => !date.getDay();

const cannotSelectAlert = () => {
  // Unfortunately i didn't find correct datepicker and i just alert user
  Alert.alert('You cannot select sundays', '', [{ text: 'OK', style: 'cancel' }], { cancelable: false });
};

export const Settings = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = useCallback((d: Date) => {
    setDate((prev) => {
      if (isSunday(d)) {
        cannotSelectAlert();
        return prev;
      }
      return d;
    });
  }, []);

  return (
    <View style={styles.view}>
      <View style={styles.rnDatePickerContainer}>
        <RNDatepicker style={{ width }} date={date} mode="date" onDateChange={onDateChange} />
      </View>
      <Text style={{ fontSize: 13, textAlign: 'center' }}>Selected Date: {format(date, 'do MMMM yyyy')}</Text>
    </View>
  );
};
