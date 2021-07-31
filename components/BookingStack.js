import React from 'react';
import { StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, Switch, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/CalendarScreen';
import IndexScreen from '../screens/IndexScreen';
const InnerStack = createStackNavigator();

export default function BookingStack() {

  const headerOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: styles.headerTint
  }

  return (
    <InnerStack.Navigator>
      <InnerStack.Screen name="Calendar" component={CalendarScreen} options={{ title: "Booking", ...headerOptions, headerLeft: null }} />
      <InnerStack.Screen name="Index" component={IndexScreen} options={{ title: "Index", ...headerOptions, headerLeft: null }} />
    </InnerStack.Navigator>
  )
}

const styles = StyleSheet.create({
  image: {
    flex:   1,
    justifyContent: "center"
  },
  baseText: {
      fontFamily: "Cochin-BoldItalic",
      fontSize: 40,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold"
  },
  flatList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
      padding: 24,
              },
                      // Header ==================================
  textHeader: {
                  marginBottom:10,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#4050D7',
  },
                      // Title ==================================
  title: {            
          marginBottom: 10,
          fontSize: 60,
          fontWeight: "bold",
          color: '#D79940',
  },
  fieldTitle: {            
      marginBottom: 10,
      fontSize: 60,
      fontWeight: "normal",
      color: '#D79940',
},
  titleContainer: {
          backgroundColor: "orange",
          padding: 10,
          margin: 10,
          flex: 0.5,
          justifyContent: "center",
          borderRadius: 20,
  },
                      // Filler ==========================
  fillerContainer:{
          padding: 10,
          backgroundColor: "blue",
          flex: 0.25,
          width: "50%",
  },                    
                      // Input ==========================
  arrivalTime: {      
          marginBottom: 10,
          fontSize: 30,
          color: '#D79940',
  },
   camera: {
      flex: 1,
    },
      circle: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    circleButton: {
      width: 70,
      height: 70,
      bottom: 0,
      borderRadius: 50,
    },
    buttonView: {
      alignSelf: 'center',
      flex: 1,
      alignItems: 'center'
    },
    innerView: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between'
    },
    input: {
      fontSize: 24,
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 15,
    },
    label: {
      fontSize: 28,
      marginBottom: 10,
      marginLeft: 5
    }
  })