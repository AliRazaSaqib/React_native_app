/** @format */

import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import logo from "../../assets/logo.png";
import humberger from "../../assets/humberger.png";
import styles from "./styles";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <View style={styles.navbar}>
        <Image source={logo} />
        <Pressable onPress={handleToggle}>
          <Image source={humberger} />
        </Pressable>
      </View>

      {isOpen ? (
        <View style={styles.menuList}>
          <View style={styles.menuListItems}>
            <Text style={[styles.menuText]}>Home</Text>
            <Text style={[styles.menuText, styles.spaces]}>Catagories</Text>
            <Text style={[styles.menuText, styles.spaces]}>Contact</Text>
            <Text style={[styles.menuText, styles.spaces]}>About</Text>
            <Text style={[styles.menuText, styles.spaces]}>FAQ</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
