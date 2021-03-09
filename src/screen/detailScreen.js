import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Context } from "../compnents/ContextProvider/context";
import EditScreen from "./EditScreen";
import { Entypo } from "@expo/vector-icons";

const DetailScreen = (props) => {
  //Call the context
  const { state } = useContext(Context);
  const Navigation = useNavigation();
  const id = props.route.params.id;
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  //create help meathod for check the id  and get the Blog info
  const handleBlog = () => {
    const info = state.find((blogPost) => blogPost.id === id);
    setTitle(info.title);
    setContext(info.context);
  };
  useEffect(() => {
    handleBlog();
  }, []);

  //headerlayout
  React.useLayoutEffect(() => {
    Navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => Navigation.navigate("Edit", { id: id })}
        >
          <Entypo
            style={{ marginRight: 5 }}
            name="edit"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, [Navigation, EditScreen]);
  return (
    <>
      {!state ? <Text>Loading</Text> : null}
      <Text style={styles.Text}>Edite Screen </Text>
      <Text style={styles.blogInfo}>{title} </Text>
      <Text style={styles.blogInfo}>{context} </Text>
      <Button onPress={() => Navigation.goBack()} title="back" />
    </>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: "blue",
  },
  blogInfo: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 50,
  },
});

export default DetailScreen;
