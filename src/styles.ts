import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    height: 4,
    borderRadius: 8,
    position: "relative",
    overflow: "hidden"
  },
  progress: {
    height: "100%",
    borderRadius: 8,
    position: "absolute",
    width: "100%",
    textAlign:'center',
    top: 0,
    opacity:0.8,
    bottom: 0,
    left: "-100%",
    ...Platform.select({ web: { transition: "0.3s all ease-in-out" } })
  }
});
