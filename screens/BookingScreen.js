import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, CheckBox } from "react-native";
import {useState, useEffect} from "react";
import { TextInput } from "react-native-gesture-handler";
import ToggleButton from 'react-toggle-button';
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";
import axios from "axios";
import { API, API_BOOK } from "../constants/API";  //API_BOOK is /create
import { useSelector } from "react-redux";

export default function BookingScreen ({route, navigation})  {  // aka Create Screen

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

const [is1Selected, set1Selection] = useState(false);
const [is2Selected, set2Selection] = useState(false);
const [is3Selected, set3Selection] = useState(false);
const [is4Selected, set4Selection] = useState(false);


return (

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Booking Screen</Text>
            <Text>paramKey: {JSON.stringify(paramKey)}</Text>

            <CheckBox
              center
              value= {is1Selected}
              onValueChange = {set1Selection}
            />       <Text>8am-10am: {is1Selected ? "👍" : "👎"}</Text>
                        <CheckBox
              center
              value= {is2Selected}
              onValueChange = {set2Selection}
            />       <Text>10am-12pm: {is2Selected ? "👍" : "👎"}</Text>
                        <CheckBox
              center
              value= {is3Selected}
              onValueChange = {set3Selection}
            />       <Text>1pm-3pm: {is3Selected ? "👍" : "👎"}</Text>
                        <CheckBox
              center
              value= {is4Selected}
              onValueChange = {set4Selection}
            />       <Text>3pm-5pm: {is4Selected ? "👍" : "👎"}</Text>
          </View>


      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

 
    //Monitor route.params for changes and add items to the database

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


                        <CheckBox
              center
              title='10am-12pm'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
            />
                        <CheckBox
              center
              title='1pm-3pm'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
            />
                                    <CheckBox
              center
              title='3pm-5pm'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
            />




*/