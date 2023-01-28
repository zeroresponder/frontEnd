import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { SelectList } from "react-native-dropdown-select-list";
import { useEffect } from "react";

import { createUserData, setFormCompleted } from "../redux/actions/auth";
export default OnboardingItem = ({ item }) => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [chol, setChol] = useState("");

  const [ecgResult, setEcgResult] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [painType, setPainType] = useState("");

  const [fastingBloodSugar, setFastingBloodSugar] = useState("");
  const [ecg, setEcg] = useState("");
  const { width } = useWindowDimensions();
  const [selected, setSelected] = React.useState([]);
  var wage = "";
  const data = [
    { key: "1", value: "Drowing" },
    { key: "2", value: "Car Crash" },
    { key: "3", value: "CPR" },
    { key: "4", value: "First Aid" },
    { key: "5", value: "Shooting" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  const sexArray = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
  ];
  const ecgResultArray = [
    { key: "1", value: "Normal" },
    { key: "2", value: "Mild/Moderate Abnormality" },
    { key: "3", value: "Severe" },
  ];
  const painTypeArray = [
    { key: "1", value: "Squeezing" },
    { key: "2", value: "Other Chest Pain" },
    { key: "3", value: "Non Cardiac Chest Pain" },
    { key: "4", value: "No Chest Pain" },
  ];
  let medicalData = {};
  useEffect(() => {
    console.log("THE ffing AGE IS : " + age);
    medicalData["age"] = age;
    console.log("INSIDE USE EFFECT FOR AGE " + JSON.stringify(medicalData));
  }, [age]);

  useEffect(() => {
    console.log("QQQQQQ");
  }, [item]);
  const sendData = () => {
    setFormCompleted();
    console.log(
      age,
      sex,
      chol,
      fastingBloodSugar,
      ecg,
      ecgResult,
      heartRate,
      painType
    );
    console.log("INSIDE FETCH FINISH " + JSON.stringify(medicalData));
    // createUserData(medicalData, accidentResponse);
  };
  useEffect(() => {
    const fetchData = async () => {};
    fetchData().catch(console.error);

    const accidentResponse = {
      selected: selected,
    };
  }, [
    selected,
    age,
    sex,
    chol,
    fastingBloodSugar,
    ecg,
    ecgResult,
    heartRate,
    painType,
  ]);

  if (item.type == 1) {
    return (
      <View style={[styles.container, { width }]}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}>Health Survey</Text>
          <Text style={styles.description}>
            Please take the time to enter data truthfully.
          </Text>
          <Text style={styles.description}>
            Feel free to leave something empty if you don't know the answer.
          </Text>
        </View>
      </View>
    );
  }
  if (item.type == 2) {
    return (
      <View style={[styles.container, { width }]}>
        <TextInput
          onChangeText={(text) => {
            setAge(text);
            console.log("setting age too : " + age);
          }}
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
            borderStyle: "solid",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
          placeholder="Age"
          placeholderTextColor={"black"}
        />

        <TextInput
          onChangeText={(text) => setChol(text)}
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
            borderStyle: "solid",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
          placeholder="Cholesterol"
          placeholderTextColor={"black"}
        />
        <TextInput
          onChangeText={(text) => setFastingBloodSugar(text)}
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
            borderStyle: "solid",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
          placeholder="Fasting Blood Sugar"
          placeholderTextColor={"black"}
        />
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 17,
          }}
        >
          Do you have chest pain?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "grey",
              borderRadius: 10,
              backgroundColor: "lightgrey",
              margin: 10,
              padding: 5,
            }}
            onPress={() => {
              setEcg(true);
              console.log(ecg);
            }}
          >
            <Text style={{ fontSize: 20 }}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "grey",
              borderRadius: 10,
              backgroundColor: "lightgrey",
              margin: 10,
              padding: 5,
            }}
            onPress={() => {
              setEcg(false);
              console.log(ecg);
            }}
          >
            <Text style={{ fontSize: 20 }}>No</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
        >
          Sex
        </Text>
        <SelectList
          setSelected={(val) => setSex(val)}
          data={sexArray}
          save="value"
        />
        <TouchableOpacity
          style={{
            height: 60,
            width: 100,
            backgroundColor: "#F8F8F8",
            marginTop: 30,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "grey",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "#F8F8F8",
          }}
          onPress={() => {
            sendData();
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 28,

              color: "#493d8a",
              textAlign: "center",
            }}
          >
            Finish!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (item.type == 3) {
    return (
      <View style={[styles.container, { width }]}>
        <Text
          style={{
            fontWeight: "300",
            color: "#62656b",
            textAlign: "center",
            paddingHorizontal: 64,
            marginTop: 30,
          }}
        >
          Skip this page if you have not taken an ECG recently
        </Text>
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
        >
          Ecg Result
        </Text>
        <SelectList
          setSelected={(val) => setEcgResult(val)}
          data={ecgResultArray}
          save="value"
        />
        <TextInput
          onChangeText={(text) => setHeartRate(text)}
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
            borderStyle: "solid",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
          placeholder="Max Heartrate"
          placeholderTextColor={"black"}
        />
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 40,
            fontSize: 20,
          }}
        >
          Pain Type
        </Text>
        <SelectList
          setSelected={(val) => setPainType(val)}
          data={painTypeArray}
          save="value"
        />

        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}></Text>
        </View>
      </View>
    );
  }
  if (item.type == 4) {
    return (
      <View style={[styles.container, { width }]}>
        <View style={{ flex: 0.2 }}></View>
        <View style={{ flex: 0.8, marginTop: 40 }}>
          <Text style={styles.title}>What accidents can you respond to?</Text>
          <Text style={styles.description}>If none just skip</Text>
          <View style={{ flex: 0.5 }}></View>
          <MultipleSelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            label="Categories"
            maxHeight={300}
          />
        </View>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
        <TouchableOpacity
          style={{
            height: 60,
            width: 100,
            backgroundColor: "#F8F8F8",
            marginTop: 30,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "grey",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "#F8F8F8",
          }}
          onPress={() => {
            sendData();
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 28,

              color: "#493d8a",
              textAlign: "center",
            }}
          >
            Finish!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
