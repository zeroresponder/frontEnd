import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StackActions, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { getEmergencies } from "../../../redux/actions";
export default function MapScreen() {
  const [markerArray, setMarkerArray] = useState(null);

  console.log("HEK");

  const DisplayMarkers = (item) => {
    let LatLng = {
      latitude: 40,
      longitude: -120,
    };
    return <Marker coordinate={LatLng} title={"Beware the opps"} />;
  };
  useEffect(() => {
    async function fetchData() {
      let temp = await getEmergencies();
      setMarkerArray(temp);
    }
    const response = fetchData();

    console.log(
      JSON.stringify(markerArray) + "IN OUR MAP FILE QQQQQQQQQQQQQQQQ"
    );
  }, []);

  return (
    <MapView
      showsUserLocation={true}
      style={{ height: "100%", width: "100%" }}
    ></MapView>
  );
}
