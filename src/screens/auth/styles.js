import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#293241",
  },
  button: {
    backgroundColor: "#3d5a80",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e0fbfc",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#e0fbfc",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    borderWidth: 3,
    color: "#e0fbfc",
    height: 50,
    backgroundColor: "#3d5a80",
    borderWidth: 1,
    textDecorationColor: "#e0fbfc",
    borderColor: "#e0fbfc",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: "#3d5a80",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e0fbfc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: "#3d5a80",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
});

export default styles;
