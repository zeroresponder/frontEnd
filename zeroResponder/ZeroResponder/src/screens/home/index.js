import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { goToSettings } from "../../redux/actions";
import { StackActions, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

import MapScreen from "./map";
export default function HomeScreens() {
  const navigation = useNavigation();
  console.log("I wanna die");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.3,
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            goToSettings();
          }}
        >
          <Icon.Settings color={"black"} width={32} height={32} />
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 0.5, alignContent: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
            height: 150,
            width: 150,
            borderRadius: 100,
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: "red",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("emergencyScreen");
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "black",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Emergency
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.3 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("mapScreen");
          }}
        >
          <Icon.MapPin color={"black"} width={32} height={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
