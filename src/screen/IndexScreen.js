import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

const IndexScreen = () => {
  const Navigation = useNavigation();
  return (
    <>
      <Text style={styles.Text}>Index Screen </Text>
      <Button
        onPress={() => Navigation.navigate("Display")}
        title="Display Blogs"
      />
      <Button
        onPress={() => Navigation.navigate("Create")}
        title="Create New Blog"
      />
      <Button
        onPress={() => Navigation.navigate("Edit")}
        title="Edit the Blog"
      />
    </>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: "black",
  },
});

export default IndexScreen;
