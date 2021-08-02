import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';
import BookingStack from '../components/BookingStack'
import UtilisationStack from '../components/UtilisationStack';
import AccountStack from '../components/AccountStack';

// Okay! Do not touch! ======================================================================

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {

  const isDark = useSelector((state) => state.accountPrefs.isDark);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Booking') {
            iconName = "book"
          } else if (route.name === 'Utilisation') {
            iconName = "briefcase"
          } else if (route.name === 'Settings') {
            iconName = "id-card"
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: "white",
        }
      }}>
        <Tab.Screen name="Booking" component={BookingStack} />
        <Tab.Screen name="Utilisation" component={UtilisationStack} />
        <Tab.Screen name="Settings" component={AccountStack} />
      </Tab.Navigator>
  )
}