import React from "react";
import { StyleSheet, Text, View, RefreshControl, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { API, API_BOOKINGS } from "../constants/API";
import { useSelector } from "react-redux";
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";

// Do not Amend ======================================================================================

// showing booked dates and time
export default function IndexScreen({ navigation, route }) { 

  const[bookings, setBookings]=useState([]);
  const[refreshing, setRefreshing]=useState(false);
  
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...isDark ? darkStyles : lightStyles }

  const token = useSelector((state) => state.auth.token);
  
  useEffect(()  => {
    navigation.setOptions({
      headerRight:() => (
        <TouchableOpacity onPress = {addBooking}>
          <FontAwesome name = "plus" size = {24} style={{color: styles.headerTint, marginRight: 15}} />          
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    getBookings();
  },[]);

  useEffect(() => {
    console.log("Setting up NAV Listerner");
    const removeListener = navigation.addListener("focus",()=> {
      console.log("Running Nav Listerner"); 
      getBookings();
    });
      getBookings();
      return removeListener;
    },[]);

// ===  Getting existing Bookings data ========================================================== 

  async function getBookings() {
    // const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(API + API_BOOKINGS, {
        headers: { Authorization: `JWT ${token}` },
      })
      console.log(response.data);
      setBookings(response.data);
      return "completed"
    } catch (error) {
      console.log (error.response.data);
      console.log (token)
      if (error.response.data.error = "Invalid token") {
        navigation.navigate("SignInSignUp");
      }
    }
  }

// okay with API_BOOKINGS ======================================================

  async function onRefresh() {
    setRefreshing(true);
    const response = await getBookings()
    setRefreshing(false);
  }
 // ==== okay with refresh Get bookings ============================================
  function addBooking(){
    navigation.navigate("Calendar")
  }
 // Okay when addBooking is selected, go to Calendar view ====================================

 async function deleteBooking(id) {
    console.log ("Deleting " + id);
    try {
      const response = await axios.delete(API + API_BOOKINGS + `/${id}`, {
        headers : { Authorization : `JWT ${token}` },
      })
      console.log(response);
      setBookings(bookings.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error)
    }
  }
// okay cancelling booking ==============================================

  const randomHexColor = (rgb) => {
      for (var i=2, col=''; i<6; i++) {
          col += (Math.random()*16|0).toString(16);
      }
      return '#'+col;
  }

  const sessn1 = () => setSessn1('8am');
  const [sessn2, setSessn2] = useState("");
  const [sessn3, setSessn3] = useState("");
  const [sessn4, setSessn4] = useState("");

   function sessionTog(item) {
    if (item.session1 == true) {
      console.log(item.session1)
      setSessn1 = "8am-10am"
    } else if (item.session2 == true) {
      console.log(item.session2)
      setSessn2 = "10am-12pm"
    } else if (item.session3 == true) {
      console.log(item.session3)
      setSessn3 = "1pm-3pm"
    } else if (item.session4 == true) {
      console.log(item.session4)
      setSessn4 = "3pm-5pm"
      }

  }

  function renderItem({item}) {
    return (

      <TouchableOpacity onPress={() => 
        navigation.navigate("Details",{id : item.id})}>
        <View style={{ 
          flex:   5,
          padding: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomColor: "#a3a3a3",
          flexDirection: "row",
          borderBottomWidth: 2,
          justifyContent: "space-between",
          backgroundColor: randomHexColor(),
        }}>
      <Text style={styles.baseText}>Date               8am    10am    1pm    3pm
          {"\n" + item.bookdate + "    " + item.session1 + "     " + item.session2 + "     " + item.session3 + "     " + item.session4}</Text>
          <TouchableOpacity onPress={() => deleteBooking(item.id)}>
            <FontAwesome name= "trash" size={20} color ="#b80000" />
          </TouchableOpacity>
         
        </View> 
      </TouchableOpacity>
    );
  }
 /// okay Detail checking =====================================================

  return (
      <View style={styles.container}>
        <FlatList
            data={bookings}
            renderItem={renderItem}
            style={{width:"100%"}}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<RefreshControl
                                colors={["#c3ca5c","#689f38"]}
                                refreshing={refreshing}
                                onRefresh={onRefresh}/>
                            }
          />
          </View>
  );
};

////////// completed ================================================

const styles = StyleSheet.create({
  image: {
    flex:   1,
    justifyContent: "center"
  },
  baseText: {
      fontFamily: "Cochin-BoldItalic",
      fontSize: 20,
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
  flatList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
})