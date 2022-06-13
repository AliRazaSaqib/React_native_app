/** @format */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 54,
    paddingHorizontal: 18,
    width: "100%",
    alignItems: "center",
  },

  menuList: {
    paddingHorizontal: 18,
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    width: "100%",
    top: "100%",
    zIndex: 2,
  },
  menuText: { fontSize: 18, lineHeight: 28 },
  spaces: {
    paddingTop: 18,
  },
});

export default styles;
