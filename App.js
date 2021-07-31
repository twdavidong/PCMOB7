import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useSelector } from "react-redux";
import store from "./redux/configureStore";
import LoggedInTabStack from "./components/LoggedInTabStack";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";

const Stack = createStackNavigator();

function App() {

  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName={token != null ? "Logged In" : "SignInSignUp"}
        animationEnabled={false}
      >
        <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
        <Stack.Screen component={LoggedInTabStack} name="Logged In" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store = {store}>
      <App/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});