import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>weather app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#1212ff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
      fontSize: 20,
      fontWeight:"bold"
  }
});
