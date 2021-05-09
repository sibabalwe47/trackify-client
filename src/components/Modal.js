import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

/*
 *  Forms
 */

import AddCategory from "./Forms/AddCategory";
import AddHabit from "./Forms/AddHabit";
import EditCategory from "./Forms/EditCategory";
import EditHabit from "./Forms/EditHabit";

const AppModal = (props) => {
  const { showModal, formType } = useSelector((state) => state.modals);
  const [modalVisible, setModalVisible] = useState(showModal);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            {formType && formType == "add-category" && <AddCategory />}
            {formType && formType == "edit-category" && <EditCategory />}
            {formType && formType == "add-habit" && <AddHabit />}
            {formType && formType == "edit-habit" && <EditHabit />}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    width: 364,
    padding: 20,
    backgroundColor: "white",
  },
  modalView: {
    width: "100%",
    height: "100%",
    margin: 20,
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AppModal;
