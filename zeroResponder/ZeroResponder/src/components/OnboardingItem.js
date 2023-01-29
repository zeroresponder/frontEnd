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
import Device from "expo-device";
import * as Location from "expo-location";
import {
  createUserData,
  setFormCompleted,
  setAgeDB,
  setCholDB,
  setEcgDB,
  setEcgResultDB,
  setFBSDB,
  setHeartRateDB,
  setPainTypeDB,
  setResponseWilling,
  setSexDB,
  setEmergencyAgeDB,
  setEmergencyCholDB,
  setEmergencyECGDB,
  setEmergencyFBSDB,
  setEmergencySexDB,
  setEmergencyType,
  setVictimState,
  startEmergency,
} from "../redux/actions/auth";
export default OnboardingItem = ({ item }) => {
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [chol, setChol] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [ecgResult, setEcgResult] = useState(null);
  const [heartRate, setHeartRate] = useState(null);
  const [painType, setPainType] = useState(null);

  const [fastingBloodSugar, setFastingBloodSugar] = useState(null);
  const [ecg, setEcg] = useState(null);
  const { width } = useWindowDimensions();

  const [emergencySelected, setEmergencySelected] = React.useState([]);
  const [selected, setSelected] = useState([]);
  var wage = "";

  const [emergencyAge, setEmergencyAge] = useState(null);
  const [emergencySex, setEmergencySex] = useState(null);
  const [emergencyChol, setEmergencyChol] = useState(null);
  const [emergencyEcg, setEmergencyEcg] = useState(null);
  const [emregencyState, setEmergencyState] = useState(null);
  const [emergencyFastingBloodSugar, setEmergencyFastingBloodSugar] =
    useState(null);
  const victimState = [
    { key: "1", value: "Concious" },
    { key: "2", value: "Bleeding" },
    { key: "3", value: "Breathing" },
  ];
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
  useEffect(() => {
    (async () => {
      /* @end */
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(
        JSON.stringify(location.coords.latitude) +
          "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ" +
          JSON.stringify(location.coords.longitude) +
          "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"
      );
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  let medicalData = {};
  useEffect(() => {
    if (age) {
      setAgeDB(age);
    }
  }, [age]);
  useEffect(() => {
    if (sex) {
      setSexDB(sex);
    }
  }, [sex]);
  useEffect(() => {
    if (ecg) {
      setEcgDB(ecg);
    }
  }, [ecg]);
  useEffect(() => {
    if (chol) {
      setCholDB(chol);
    }
  }, [chol]);
  useEffect(() => {
    if (fastingBloodSugar) {
      setFBSDB(fastingBloodSugar);
    }
  }, [fastingBloodSugar]);
  useEffect(() => {
    if (ecgResult) {
      setEcgResultDB(ecgResult);
    }
  }, [ecgResult]);
  useEffect(() => {
    if (heartRate) {
      setHeartRateDB(heartRate);
    }
  }, [heartRate]);
  useEffect(() => {
    if (painType) {
      setPainTypeDB(painType);
    }
  }, [painType]);
  useEffect(() => {
    if (selected) {
      setResponseWilling(selected);
    }
  }, [selected]);
  useEffect(() => {
    console.log(emergencyAge);
    if (emergencyAge) {
      setEmergencyAgeDB(emergencyAge);
    }
  }, [emergencyAge]);

  useEffect(() => {
    if (emergencyChol) {
      setEmergencyCholDB(emergencyChol);
    }
  }, [emergencyChol]);
  useEffect(() => {
    if (emergencyFastingBloodSugar) {
      setEmergencyFBSDB(emergencyFastingBloodSugar);
    }
  }, [emergencyFastingBloodSugar]);
  useEffect(() => {
    if (emergencyEcg) {
      setEmergencyECGDB(emergencyEcg);
    }
  }, [emergencyEcg]);
  useEffect(() => {
    if (emergencySex) {
      setEmergencySexDB(emergencySex);
    }
  }, [emergencySex]);
  useEffect(() => {
    if (emregencyState) {
      setVictimState(emregencyState);
    }
  }, [emregencyState]);
  useEffect(() => {
    if (emergencySelected) {
      setEmergencyType(emergencySelected);
    }
  }, [emergencySelected]);
  const sendData = () => {
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
  if (item.type == 5) {
    startEmergency(location);
    return (
      <View style={[styles.container, { width }]}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}>Emergency Survey</Text>
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
  if (item.type == 6) {
    return (
      <View style={[styles.container, { width }]}>
        <TextInput
          onChangeText={(text) => {
            setEmergencyAge(text);
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
          onChangeText={(text) => setEmergencyChol(text)}
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
          onChangeText={(text) => setEmergencyFastingBloodSugar(text)}
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
              setEmergencyEcg(true);
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
              setEmergencyEcg(false);
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
          setSelected={(val) => setEmergencySex(val)}
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
  if (item.type == 7) {
    return (
      <View style={[styles.container, { width }]}>
        <View style={{ flex: 0.2 }}></View>
        <View style={{ flex: 0.8, marginTop: 40 }}>
          <Text style={styles.title}>What happened?</Text>
          <View style={{ flex: 0.5 }}></View>
          <SelectList
            setSelected={(val) => setEmergencySelected(val)}
            data={data}
            save="value"
            maxHeight={200}
          />
        </View>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
        <Text style={styles.title}>What state is victim in?</Text>
        <Text style={styles.description}>select all that apply</Text>
        <MultipleSelectList
          setSelected={(val) => setEmergencyState(val.value)}
          data={victimState}
          save="value"
          label="Categories"
          maxHeight={100}
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
  containers: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
