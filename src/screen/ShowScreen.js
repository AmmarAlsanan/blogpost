import React, { useContext } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../compnents/ContextProvider/context";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = () => {
  const { state, DeleteBlogPost } = useContext(Context);
  const Navigation = useNavigation();

  //headerlayout
  React.useLayoutEffect(() => {
    Navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => Navigation.navigate("AddBlog")}>
          <AntDesign
            style={{ marginRight: 5 }}
            name="plus"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, [Navigation, ShowScreen]);
  return (
    <>
      <Text style={styles.Text}>Show Screen </Text>
      <Button onPress={() => Navigation.goBack()} title="black" />

      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => Navigation.push("Detail", { id: item.id })}
            >
              <View style={styles.cardView}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => DeleteBlogPost(item.id)}>
                  <FontAwesome name="trash" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
ShowScreen.n;

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: "black",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderLeftWidth: 2,
    borderColor: "grey",
    margin: 5,
  },
  textTitle: {
    fontSize: 25,
  },
});

export default ShowScreen;
