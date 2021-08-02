import React, { useState, useEffect } from "react";
import {Text, View, Button} from "react-native";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookingScreen from '../screens/BookingScreen';

export default function CalendarScreen({navigation}) {  // ============Start of function CalendarScreen ==============================
    

    const [value, onChange] = useState(new Date());

    // show bookings and select date to book


return (
        <View style={{flex: 1,
            justifyContent: "center",
            alignItems: "center"}}>           

            <Calendar
               
                calendarType = {"ISO 8601"}
                onChange = {onChange}
                value = {value}
            />

                <Button
                        title="BookingScreen"
                        onPress={() =>
                        navigation.navigate('BookingScreen', { paramKey: date.toLocaleDateString('en-GB'),
                        })
                        }
                />  
        </View>
    );

const styles = StyleSheet.create({
                    
    // Container ==================================
            container: {
                flex: 1,
                flexDirection: "column",
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
    // Text and Input ==========================
            text: {
                color: "white",
                fontSize: 42,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#000000a0"
                },
            arrivalTime: {      
                marginBottom: 10,
                fontSize: 30,
                color: '#D79940',
                },
            input: {      
                marginBottom: 10,
                fontSize: 30,
                color: '#D79940',
                },
    // Button ==============================
            button: {             
                marginBottom: 20,
                borderRadius: 15,
                backgroundColor: '#D740D0',
                paddingVertical: 20,
                paddingHorizontal: 80,
                },
            loginButton: {             
                marginBottom: 20,
                borderRadius: 15,
                backgroundColor: '#D740D0',
                paddingVertical: 20,
                paddingHorizontal: 80,
                },
            textButton:{
                fontSize: 30,
                color: '#9ED740'
                },
    // Image ==============================
            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
                },
    // Error =====================================
            errorText: {
                color: "red",
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                height: 40,
                },
        });
}

/*
<Datepicker
    colors={[                               // highlighting
        { 
            date: new Date(year, month, 6),
            highlight: '#f3a146'
        },{ 
            date: new Date(year, month, 15),
            highlight: '#b4c145'
        },{ 
            date: new Date(year, month, 23),
            highlight: '#ff6a00'
        },{ 
            date: new Date(year, month, 11),
            background: '#ea4986',
            highlight: '#c7356d'
        },
    ]}
    marked={[                                 // marked....
        { 
            date: new Date(year, month, 2), 
            color: '#46c4f3'
        }, { 
            date: new Date(year, month, 10), 
            color: '#7e56bd'
        }, { 
            date: new Date(year, month, 13), 
            color: '#f13f77'
        }, { 
            date: new Date(year, month, 13), 
            color: '#89d7c9'
        }, { 
            date: new Date(year, month, 21), 
            color: '#ffc400'
        }, { 
            date: new Date(year, month, 21), 
            color: '#8dec7d'
        },{ 
            recurring: { 
                repeat: 'yearly', month: 4, day: 1
            },
            color: 'ffc400'
        }
    ]}/>

*/