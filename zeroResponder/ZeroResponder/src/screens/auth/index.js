import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import { login, register } from "../../redux/actions/auth";

export default function AuthScreen() {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const currentUserObj = useSelector((state) => state.auth);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };
  const handleButtonPress = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      handleLogin();
    } else {
      handleRegister();
    }
  };
  const handleLogin = () => {
    dispatch(login(emailAddress, password))
      .then(() => {
        console.log("login successful");
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleRegister = () => {
    dispatch(register(emailAddress, password))
      .then(() => {
        console.log("register successful");
        console.log(" SRTTTTT " + JSON.stringify(currentUserObj));
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>

          <Image
            href={
              "https://kslnewsradio.com/wp-content/uploads/2021/01/Getty-first-responder-e1609546394842-620x370.jpg"
            }
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 180,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                marginTop: 40,
                backgroundColor: "#3d5a80",
                opacity: 0.9,
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 30,
                borderWidth: 3,
                borderColor: "#e0fbfc",
                alignContent: "center",
              }}
            >
              <Feather
                name="shield"
                size={60}
                color="#e0fbfc"
                style={{ padding: 5, marginHorizontal: 8 }}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: "bold",
                  marginHorizontal: 8,
                  color: "#e0fbfc",
                  fontSize: 35,
                  fontStyle: "sans-serif",
                }}
              >
                ZeroResponders
              </Text>
            </View>
          </View>
        </Svg>
        <Animated.View
          style={[
            styles.closeButtonContainer,
            closeButtonContainerStyle,
            {
              borderTopColor: "#e0fbfc",
              borderRightColor: "#e0fbfc",
              borderLeftColor: "#e0fbfc",
              borderBottomColor: "#e0fbfc",
            },
          ]}
        >
          <Text
            style={{ color: "#e0fbfc" }}
            onPress={() => (imagePosition.value = 1)}
          >
            X
          </Text>
        </Animated.View>
      </Animated.View>
      <KeyboardAvoidingView style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#e0fbfc"
            style={styles.textInput}
            onChangeText={(text) => setEmailAddress(text)}
          />
          {isRegistering && (
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#e0fbfc"
              style={styles.textInput}
              onChangeText={(text) => setName(text)}
            />
          )}
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#e0fbfc"
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <TouchableOpacity
              onPress={() => {
                formButtonScale.value = withSequence(
                  withSpring(1.5),
                  withSpring(1)
                );
                handleButtonPress();
              }}
            >
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  );
}
