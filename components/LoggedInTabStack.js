import React from 'react';
import BookingStack from '../components/BookingStack'
import UtilisationStack from '../components/UtilisationStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function LoggedInTabStack() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Booking') {
            iconName = "comments"
          } else if (route.name === 'Utilisation') {
            iconName = "cog"
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
      </Tab.Navigator>
  )
}