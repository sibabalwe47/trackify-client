import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch } from "react-redux";
import { hideModal } from "../../store/actions/modals/ModalActions";
import { Formik } from "formik";
import * as yup from "yup";
import { FontAwesome } from "@expo/vector-icons";
import { icons } from "../../helpers/data";
import { LogBox } from "react-native";

const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
});

const EditCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.form}>
      <View>
        <Formik
          initialValues={{
            title: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            dispatch(hideModal());
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <Text style={styles.title}>Edit category</Text>
              <View style={styles.titleInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("title")}
                  onBlur={props.handleBlur("title")}
                  value={props.values.title}
                  placeholder="Category name"
                />
                <Text style={styles.error}>
                  {props.touched.title && props.errors.title}
                </Text>
              </View>
              <ScrollView
                style={styles.iconsContainer}
                contentContainerStyle={{ paddingBottom: 20 }}
              >
                <FlatList
                  key={"_"}
                  data={icons}
                  numColumns={6}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <View style={styles.iconWrapper}>
                      <FontAwesome name={item} size={24} color="#575A89" />
                    </View>
                  )}
                />
              </ScrollView>
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    color: "#575A89",
  },
  button: {
    backgroundColor: "#FF5A5F",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  input: {
    borderColor: "#f5f5f5",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    fontFamily: "Montserrat_400Regular",
    color: "#575A89",
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    fontSize: 16,
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
});

export default EditCategory;
