import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { Context } from "../ContextProvider/context";

//create comp
const Inputfiled = () => {
  //mange state title , text using
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [letter, setLetter] = useState();
  const { addBlogPost } = useContext(Context);
  const Navigation = useNavigation();

  //handle the number of the letter
  const handleLetter = () => {
    const maxLength = context.length + 1;
    setLetter(maxLength);
  };

  return (
    //create input filed
    <View style={styles.Viewform}>
      <View>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          autoCorrect={true}
          value={title}
          onChangeText={(text) => {
            setTitle(text);
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
          onChange={() => handleLetter()}
          onChangeText={(context) => setContext(context)}
        />
        <Text style={{ fontSize: 10 }}>{letter} of 300</Text>
      </View>
      <Button
        title="send"
        onPress={() => {
          addBlogPost(title, context), Navigation.navigate("Display");
        }}
      />
    </View>
  );
};

//create style

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

export default Inputfiled;
