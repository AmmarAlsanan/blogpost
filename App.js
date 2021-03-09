import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/compnents/ContextProvider/context";

//import Screen
import ShowScreen from "./src/screen/ShowScreen";
import IndexScreen from "./src/screen/IndexScreen";
import EditScreen from "./src/screen/EditScreen";
import CreateScreen from "./src/screen/CreateScreen";
import DetailScreen from "./src/screen/detailScreen";
import AddNewBlog from "./src/screen/AddNewBlog";

const App = () => {
  //create stack

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={{ title: "Blog" }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Create New Blog" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Edit" }}
        />
        <Stack.Screen
          name="Display"
          component={ShowScreen}
          options={{
            title: "Display",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Detail" }}
        />
        <Stack.Screen
          name="AddBlog"
          component={AddNewBlog}
          options={{ title: "Add Blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
