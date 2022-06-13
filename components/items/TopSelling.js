/** @format */

import React from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import index from "../json/index";

export default function TopSelling({ setItemId, setModalVisible }) {
  const handleVisible = (id) => {
    setModalVisible(true);
    setItemId(id);
  };
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.topSelling}>Top selling products</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {index.map((elem) => (
          <View style={styles.cart} key={elem.id}>
            <Image source={elem.image} style={styles.img} />
            <View style={styles.cartWraper}>
              <Text style={styles.text}>{elem.name}</Text>
              <Text style={[styles.text, styles.price]}>{elem.price}</Text>
              <Pressable
                style={styles.cartButton}
                onPress={() => handleVisible(elem.id)}
              >
                <Text style={styles.addCart}>Add to cart</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
