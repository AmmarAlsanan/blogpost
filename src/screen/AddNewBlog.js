import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

//components
import InpustFiled from "../compnents/copmonent/inputFiled";

const addNewBlog = () => {
  const Navigation = useNavigation();
  return (
    <>
      <Text style={styles.Text}>Edite Screen </Text>
      <InpustFiled />
    </>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: "blue",
  },
});

export default addNewBlog;
