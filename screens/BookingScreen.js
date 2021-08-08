import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, CheckBox } from "react-native";
import {useState} from "react";
import axios from "axios";
import { API, API_BOOK } from "../constants/API";  //API_BOOK is /create
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

export default function BookingScreen ({route, navigation})  {  // aka Create Screen
  
  const token = useSelector((state) => state.auth);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...isDark ? darkStyles : lightStyles }
    
// ======================================================================================================

  const { paramKey } = route.params;

  const [bookdate, setBookdate] = useState(paramKey);  // taking booked date from Calendar param
  const [session1 , set1Session] = useState("");
  const [session2 , set2Session] = useState("");
  const [session3 , set3Session] = useState("");
  const [session4 , set4Session] = useState("");  

async function savePost() {
  const post = {
    "bookdate": bookdate, 
    "session1": session1,
    "session2": session2,
    "session3": session3,
    "session4": session4, 
     
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
            <Text>Booking Screen</Text>
            <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={savePost}>
            <Text>Select session on {bookdate}</Text>
                <Text>8am-10am:</Text>
              <CheckBox
                style={styles.checkbox}
                value= {session1}
                
                onValueChange = { () => session1 ? set1Session(false) : set1Session(true)}
                />
                <Text>10am-12pm:</Text>
                <CheckBox
                style={styles.checkbox}
                value= {session2}
                onValueChange = { () =>  session2 ? set2Session(false) : set2Session(true)}
                />
                <Text>1pm-3pm:</Text>
                <CheckBox
                style={styles.checkbox}
                value= {session3}
                onValueChange = { () => session3 ? set3Session(false) : set3Session(true)}
                />
                <Text>3pm-5pm:</Text>
              <CheckBox
                style={styles.checkbox}
                value= {session4}
                onValueChange = { () => session4 ? set4Session(false) : set4Session(true)}
                />
                 
                <Text style={styles.buttonText}>
                Save
              </Text>
            </TouchableOpacity>
 
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
    justifyContent: "center",
    alignSelf: "center",
  },
  label: {
    margin: 20,
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