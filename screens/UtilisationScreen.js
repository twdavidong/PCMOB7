import * as React from "react";
import {Text, View} from "react-native";
import {useState} from "react";
import axios from "axios";
import { API, API_BOOK } from "../constants/API";  //API_BOOK is /create
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

export default function UtilisationScreen() {

    const token = useSelector((state) => state.auth);
    const isDark = useSelector((state) => state.accountPrefs.isDark);
    const styles = { ...commonStyles, ...isDark ? darkStyles : lightStyles }
      
  // ======================================================================================================
  

    return (
        <View style={{flex: 1,
                    justifyContent: "center",
                    alignItems: "center"}}>
                        <Text>Utilisation</Text>
                    </View>
    );
};