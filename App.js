import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { Provider, useSelector } from "react-redux";

import * as action from "./state/modifyBug";
import store from "./state/store";
import BugCard from "./components/bugCard";

export default function App() {
  const [textValue, setTextValue] = useState("");
  store.subscribe(() => {
    renderBug();
  });

  const inputHandler = (inputText) => {
    setTextValue(inputText);
  };

  //const bugList = useSelector((state) => state.meals.favMeals);
  //console.log(useSelector((state) => state));
  const addHandler = () => {
    store.dispatch(action.bugAdded(textValue));
    //setTextValue('')
  };
  const renderBug = (itemData) => {
    //console.log("renderbug called");
    if (itemData) {
      return (
        <BugCard id={itemData.item.id} content={itemData.item.description} />
      );
    }
  };

  //console.log(store.getState());

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <View style={{ borderBottomWidth: 1, width: "40%" }}>
            <TextInput
              placeholder="Enter bug detail"
              onChangeText={inputHandler}
              value={textValue}
            />
          </View>
          <Button title="ADD" onPress={addHandler} />
        </View>

        <FlatList
          renderItem={renderBug}
          data={store.getState().activeBugs}
          keyExtractor={(item, index) => item.id.toString()}
          style={styles.flatlist}
          extraData={(state) => state.activeBugs}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  inputView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "25%",
    flexDirection: "row",
  },
  flatlist: {
    //flex: 1,
    //width:"100%"
  },
});
