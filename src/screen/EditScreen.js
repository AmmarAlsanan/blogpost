import React, { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Context } from "../compnents/ContextProvider/context";

const EditScreen = (props) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const { state, editBlogPost } = useContext(Context);
  const Navigation = useNavigation();
  const id = props.route.params.id;

  const handleBlog = () => {
    const info = state.find((blogPost) => blogPost.id === id);
    setTitle(info.title);
    setContext(info.context);
  };
  useEffect(() => {
    handleBlog();
  }, []);

  return (
    //create input filed
    <View style={styles.Viewform}>
      <View>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput
          style={styles.input}
          placeholder={title}
          autoCorrect={true}
          value={title}
          onChangeText={(text) => {
            setTitle(text), console.log(title);
          }}
        />
      </View>

      <View>
        <Text style={styles.text}>Enter body</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          autoCorrect={true}
          maxLength={300}
          value={context}
          onChangeText={(context) => setContext(context)}
        />
      </View>
      <Button
        title="send"
        onPress={() => {
          editBlogPost(id, title, context), Navigation.navigate("Display");
        }}
      />
      <Text>
        {title},{context}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Viewform: {
    display: "block",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 25,
    borderRadius: 5,
    margin: 3,
  },
  text: {
    fontSize: 30,
  },
});

export default EditScreen;
