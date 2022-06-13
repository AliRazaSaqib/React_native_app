/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LatestProducts from "./components/items/LatestProducts";
import TopSelling from "./components/items/TopSelling";
import Navbar from "./components/navbar/Navbar";
import Model from "./components/model/Model";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemsId, setItemId] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Navbar />
        <TopSelling setItemId={setItemId} setModalVisible={setModalVisible} />
        <LatestProducts
          setItemId={setItemId}
          setModalVisible={setModalVisible}
        />
        <Model
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          itemsId={itemsId}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
