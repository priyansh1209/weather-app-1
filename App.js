import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: "",
    };
  }

  render() {
    console.log(this.state.weather);
    if (this.state.weather === "") {
      return (
        <View style={styles.container}>
          <Header />
          <Text> Loading </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header />
          <Text>temperature: {this.state.weather.main.temp} &deg;C</Text>
        </View>
      );
    }
  }
  componentDidMount() {
    this.getWeather();
  }
  getWeather = async () => {
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ weather: responseJson });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
