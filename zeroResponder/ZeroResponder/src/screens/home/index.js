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
import { MotiView } from "moti";
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
          style={styles.emergencyButton}
          onPress={() => {
            navigation.navigate("emergencyScreen");
          }}
        >
          {[...Array(3).keys()].map((index) => {
            return (
              <View
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
          })}
          <Text style={styles.emergencyText}>Emergency</Text>
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
  emergencyText: {
    fontSize: 28,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
  emergencyButton: {
    alignSelf: "center",
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#ee6c4d",
    justifyContent: "center",
  },
  dot: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: "red",
  },
});
