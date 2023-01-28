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
export default HomeScreens = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.2,
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
          <Icon.Settings width={32} height={32} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 0.3 }}>
        <TouchableOpacity onPress={() => {}}>
          <Icon.MapPin width={32} height={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
