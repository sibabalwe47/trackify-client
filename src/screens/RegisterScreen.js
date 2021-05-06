import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from "react-native";
import LoginForm from "../components/Forms/LoginForm";
import { Formik } from "formik";
import * as yup from "yup";
import { LogBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/auth/AuthAction";
import { style } from "d3-selection";

const formSchema = yup.object({
  firstName: yup.string().required().min(3).max(50),
  lastName: yup.string().required().min(3).max(50),
  emailAddress: yup.string().required().min(3).max(50),
  password: yup.string().required().min(3).max(50),
});

const RegisterScreen = (props) => {
  // Navigation data to redirect
  const navData = props.navigation;
  // Component level state
  const [errorExists, setErrorExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Store dispatcher
  const dispatch = useDispatch();
  // App state
  const { error } = useSelector((state) => state.register);
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            password: "",
            emailAddress: "",
            avatar: "",
          }}
          validationSchema={formSchema}
          onSubmit={async (values) => {
            // Get results of dispatched actions
            const result = await dispatch(registerUser(values));
            // Check success from server
            if (result && !result.success) {
              // Check error in state - to display error meessage
              if (error && error) setErrorExists(!errorExists);
              // Remove error message from screen
              setTimeout(() => {
                setErrorExists(false);
              }, 4000);
            } else {
              // Display spinner
              setIsLoading(!isLoading);
              // Navigate to login screen
              setTimeout(() => {
                navData.navigate("Login");
                setIsLoading(!isLoading);
              }, 5000);
            }
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Text style={styles.headerTitle}>Let's sign you up.</Text>
                </View>
              </View>
              <View style={styles.imageWrapper}>
                <View style={styles.imageUploadWrapper}>
                  <FontAwesome name="camera" size={28} />
                </View>
              </View>

              <View style={styles.titleInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("firstName")}
                  onBlur={props.handleBlur("firstName")}
                  value={props.values.firstName}
                  placeholder="First name"
                />
                <Text style={styles.error}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              </View>
              <View style={styles.titleInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("lastName")}
                  onBlur={props.handleBlur("lastName")}
                  value={props.values.lastName}
                  placeholder="Last name"
                />
                <Text style={styles.error}>
                  {props.touched.lastName && props.errors.lastName}
                </Text>
              </View>

              <View style={styles.titleInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("emailAddress")}
                  autoCapitalize="none"
                  onBlur={props.handleBlur("emailAddress")}
                  value={props.values.emailAddress}
                  placeholder="Email address"
                />
                <Text style={styles.error}>
                  {props.touched.emailAddress && props.errors.emailAddress}
                </Text>
              </View>

              <View style={styles.titleInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  autoCapitalize="none"
                  value={props.values.password}
                  placeholder="Password"
                  secureTextEntry={true}
                />
                <Text style={styles.error}>
                  {props.touched.password && props.errors.password}
                </Text>
              </View>
              <View style={styles.serverErrorBlock}>
                {errorExists == true && (
                  <Text style={styles.serverError}>{error}</Text>
                )}
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
                activeOpacity={1}
              >
                {!isLoading ? (
                  <Text style={styles.buttonText}>SIGN UP</Text>
                ) : (
                  <ActivityIndicator
                    size="large"
                    color="rgba(255,255,255,.3)"
                  />
                )}
              </TouchableOpacity>
              <View style={styles.accountArea}>
                <Text style={styles.accountText}>Have an account?</Text>
                <TouchableOpacity onPress={() => navData.navigate("Login")}>
                  <Text style={styles.option}>Login.</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  errorBlock: {
    paddingTop: 5,
    paddingBottom: 5,
    //marginBottom: 15
    marginTop: -20,
  },
  titleInput: {
    marginBottom: -5,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  headerLeft: {
    width: "85%",
  },
  headerTitle: {
    //fontWeight: "700",
    fontSize: 40,
    fontFamily: "Montserrat_700Bold",
    color: "#575A89",
  },
  imageWrapper: {
    width: "100%",
    justifyContent: "flex-end",
    //backgroundColor: '#f5f5f5',
    position: "relative",
    //height: 160
  },
  loaderContainer: {
    width: 11,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formArea: {
    marginTop: 30,
  },
  imageUploadWrapper: {
    backgroundColor: "#f5f5f5",
    width: 106,
    height: 106,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    justifyContent: "center",
    position: "relative",
    height: 160,
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    // width: 300,
    // height: 200,
    // position: "absolute",
    // right: -20,
    width: 4,
    height: 4,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF5A5F",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    //padding: 15,
    borderRadius: 5,
    marginTop: 20,
    height: 60,
  },
  input: {
    borderColor: "#f5f5f5",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "#f5f5f5",
    fontFamily: "Montserrat_500Medium",
    marginTop: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
  iconsContainer: {
    borderColor: "#f5f5f5",
    borderWidth: 2,
    borderRadius: 5,
    height: 280,
    marginBottom: 50,
    padding: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#f5f5f5'
    //marginRight: 15
  },
  passwordText: {
    color: "#575A89",
    fontSize: 16,
    paddingLeft: 3,
    fontFamily: "Montserrat_400Regular",
  },
  accountArea: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
    marginTop: 10,
  },
  accountText: {
    color: "#575A89",
    textAlign: "center",
    fontSize: 14,
    marginRight: 5,
    fontFamily: "Montserrat_400Regular",
  },
  option: {
    color: "#FF5A5F",
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
  },
  error: {
    fontSize: 11,
    paddingTop: 3,
    paddingBottom: 10,
    paddingHorizontal: 3,
    color: "#6C63FF",
    textAlign: "right",
  },
  serverErrorBlock: {
    backgroundColor: "#Fff",
    height: 30,
    justifyContent: "center",
    marginTop: -15,
    marginBottom: -10,
  },
  serverError: {
    color: "#FF5A5F",
    //textAlign: 'center',
    fontSize: 12,
    marginRight: 5,
    fontFamily: "Montserrat_400Regular",
    //marginBottom: -15,
  },
  loaderImage: {
    width: 20,
    height: 20,
  },
});

export default RegisterScreen;
