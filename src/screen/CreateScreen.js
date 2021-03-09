import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../compnents/ContextProvider/context";

const CreateScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  console.log(state);
  const Navigation = useNavigation();
  return (
    <View>
      <Text style={styles.Text}>Create Screen </Text>
      <Button onPress={() => Navigation.goBack()} title="back" />
      <Button onPress={() => addBlogPost()} title="add Blog" />
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: "red",
  },
  blogCard: {
    width: 300,
    height: 40,
    borderRadius: 9,
  },
});

export default CreateScreen;
