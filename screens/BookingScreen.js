import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import {useState, useEffect} from "react";
import { TextInput } from "react-native-gesture-handler";
import ToggleButton from 'react-toggle-button';
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";
import axios from "axios";
import { API, API_BOOK } from "../constants/API";
import { useSelector } from "react-redux";

export default function BookingScreen ({navigation, route})  {  // aka Create Screen

  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...isDark ? darkStyles : lightStyles }
  
  const token = useSelector((state) => state.auth.token);

// ======================================================================================================

   const { paramKey } = route.params;

    const [bname, setName] = useState("");
    const [bookdate, setBookdate] = useState("");

    const [booking, setBooking] = useState([]);

async function savePost() {
  const post = {
    "name": bname,
    "bookdate": bookdate, 
  }
  
  try {
    console.log(token);
    const response = await axios.post(API + API_BOOK, post, {
      headers: { Authorization: `JWT ${token}` }
    });
    console.log(response.data)
    navigation.navigate("Index", { post: post })
  } catch (error) {
    console.log(error)
  }
}

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>
      React Native Pass Value From One Screen to Another
      Using React Navigation
    </Text>
    <Text style={styles.textStyle}>
      Values passed from First page: {route.params.paramKey}
    </Text>
  </View>
        );
  }; 
 

  
    //Monitor route.params for changes and add items to the database

 //   useEffect(() => {
 //       if (route.params?.text) {
 //           const newBooking = {
 //               title: route.params.text,
 //               done: false,
 //               id: booking.length.toString(),
 //               bookingAP: ToggleButton.onToggle(true),
//            };
// data sending to API
// ... some lines of code later

// Button to select AM/PM or period time slot maybe 1hr-2hrs??
// eg 9am  and then select no. of hours needed?
                   
        /*    <Text>Values passed from First page: {route.params.setSchedule}</Text> */


/**
 * 
 *     <ToggleButton
        value={ self.state.value || false }
        thumbStyle={borderRadiusStyle}
        trackStyle={borderRadiusStyle}
        onToggle={(value) => {
        self.setState({
                value: !value,
        })
        }} 
    />
 * 
/*    firebase.firestore().collection("booking").add({
        name: "Ong Teck Wee",
        emailaddress: "twdavidong@gmail.com",
        body: "maybe some remarks",
        bookingAP : "AM",
        date: "12/06/2022",
        timeStart: "08:00",
        timeEnd : "12.30",
        attachement: "signature",
    })
*/

/**
 *        <Text style = {[additionalStyles.label, styles.text]}>Enter Name</Text>
          <TextInput style = {additionalStyles.input}
            value = {bname}
            onChangeText = {text => setName(text)}
            />
        <Text style = {[additionalStyles.label, styles.text]}>Enter BookDate:</Text>
          <TextInput style = {additionalStyles.input}
            value = {bookdate}
            onChangeText = {text => setBookdate(text)}
            />
          <TouchableOpacity style={[styles.button, {margin: 20}]} onPress={savePost}>
            <Text style= {styles.buttonText}>Save</Text>
            </TouchableOpacity>
 * 
 * 
 */