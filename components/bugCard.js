import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function BugCard(props) {
  const removeHandler = () => {
    console.log(props.id, 'deleted');
  };
  const resolvedHandler = () => {
    console.log(props.id, "resolved");
  };
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text>{props.content}</Text>
      </View>
      <View style={styles.button}>
        <Button title="resolve" color="purple" onPress={resolvedHandler} />
        <Button title="remove" color="red" onPress={removeHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    borderBottomWidth: 1,
    marginBottom: 5,
    marginLeft: "5%",
    marginRight: "5%",
  },
  text: {
    flex: 3,
    marginLeft: 10,
  },
  button: {
    flex: 1,
    width: "20%",
  },
});
