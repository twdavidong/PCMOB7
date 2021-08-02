import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/CalendarScreen';
import IndexScreen from '../screens/IndexScreen';
import { lightStyles, darkStyles } from '../styles/commonStyles';
import { useSelector } from 'react-redux';

const InnerStack = createStackNavigator();

export default function BookingStack() {

  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = isDark ? darkStyles : lightStyles;

  const headerOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: styles.headerTint
  }

  return (
    <InnerStack.Navigator>
      <InnerStack.Screen name="Index" component={IndexScreen} options={{ title: "Index", ...headerOptions, headerLeft: null }} />
      <InnerStack.Screen name="Calendar" component={CalendarScreen} options={{ title: "Add", ...headerOptions, headerLeft: null }} />
    </InnerStack.Navigator>
  )
}