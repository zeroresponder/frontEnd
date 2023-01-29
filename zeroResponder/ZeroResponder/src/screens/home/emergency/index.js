import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Animated, {
  AnimatedLayout,
  SlideInUp,
  SlideInRight,
  FadeInRight,
  FadeIn,
  BounceIn,
  LightSpeedInRight,
} from "react-native-reanimated";
import { StackActions, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
export default function EmergencyScreen() {
  const navigation = useNavigation();
  console.log("wasd");
  return (
    <Animated.View
      entering={FadeIn.duration(1000)}
      style={{ flex: 1, backgroundColor: "red" }}
    >
      <View style={{ flex: 0.2 }}></View>
      <View style={{ flex: 0.5, justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "lightgrey",
            height: 100,
            justifyContent: "center",
            borderRadius: 20,
            borderWidth: 3,
          }}
        >
          <Text
            style={{ fontSize: 60, fontWeight: "bold", textAlign: "center" }}
          >
            Self Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "lightgrey",
            height: 100,
            justifyContent: "center",
            borderRadius: 20,
            borderWidth: 3,
          }}
          onPress={() => {
            navigation.navigate("emergencyScreenForm");
          }}
        >
          <Text
            style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
          >
            Report Emergency
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.2 }}></View>
    </Animated.View>
  );
}
