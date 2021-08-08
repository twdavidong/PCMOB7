import React from 'react';
import { StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, Switch, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import UtilisationScreen from '../screens/UtilisationScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import IndexScreen from '../screens/IndexScreen';
import { lightStyles, darkStyles } from '../styles/commonStyles';
import { useSelector } from 'react-redux';

const InnerStack = createStackNavigator();

export default function UtilisationStack() {

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
              <InnerStack.Screen name="Utilisation" component={UtilisationScreen} options={{ title: "Utilisation", ...headerOptions, headerLeft: null }} />
              <InnerStack.Screen name="QRCode" component={QRCodeScreen} options={{ title: "Scan QR Code", ...headerOptions, headerLeft: null }} />
            </InnerStack.Navigator>
          )
        };