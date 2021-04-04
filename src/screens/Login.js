import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "../components";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <Input
        placeholder="Password"
        value={inputs.password}
        onChangeText={(e) => handleChange("password", e)}
        secureTextEntry={true}
      />
      <Text>{inputs.email}</Text>
      <Button title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
