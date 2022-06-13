/** @format */

import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import styles from "./styles";

export default function Model({ modalVisible, setModalVisible, itemsId }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Your selected items id : {itemsId}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
