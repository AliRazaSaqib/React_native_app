/** @format */
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  cart: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 18,
    padding: 12,
    alignItems: "center",
  },

  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  text: { fontSize: 18 },
  price: {
    paddingTop: 10,
  },

  cartButton: {
    backgroundColor: "#c81f33",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  addCart: {
    color: "white",
    fontSize: 18,
  },
  cartWraper: { paddingLeft: 24 },

  topSelling: {
    paddingLeft: 18,
    paddingTop: 24,
    fontSize: 24,
    color: "#c81f33",
  },
});

export default styles;
