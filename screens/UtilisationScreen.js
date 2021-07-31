import * as React from "react";
import {Text, View} from "react-native";

export default function UtilisationScreen() {
    return (
        <View style={{flex: 1,
                    justifyContent: "center",
                    alignItems: "center"}}>
                        <Text>Utilisation</Text>
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