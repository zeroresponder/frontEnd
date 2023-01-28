import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { userAuthStateListener } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import home from "../../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import MedicalForm from "../../screens/medicalForm";
export default function HomeScreen() {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const currentUserObj = useSelector((state) => state.auth);
  const EmptyScreen = () => {
    return (
      <View>
        <Text>
          EMPTYU SCREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        </Text>
      </View>
    );
  };
  useEffect(() => {
    console.log(JSON.stringify(currentUserObj));
  }, []);
  return (
    <Stack.Navigator>
      {currentUserObj.currentUser.surveyTaken == false ||
      currentUserObj.currentUser.surveyTaken == null ? (
        <Stack.Screen
          name="auth"
          component={MedicalForm}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="sus"
            component={home}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
