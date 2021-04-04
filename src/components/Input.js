import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <View style={styles.view}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 40,
    width: "85%",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
});
