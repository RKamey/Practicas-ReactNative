import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue : false,
    }
  }

  onPressLearnMore() {
    console.warn(`Presionaste el boton de "Learn More"`)
  }

  onChange = value => {
    console.warn(`El valor del switch es: ${value}`)
    this.setState({switchValue: value})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressLearnMore}
          title={"Learn More"}
          color="#841584"
          accesibilityLabel="Learn more about this purple button"
        />
        <Text 
          style={styles.text}>
          Esto es React Native   
        </Text>
        <Switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
          value = {this.state.switchValue}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2026',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 30,
  },
  image: {
    marginTop: 10,
    width: 150,
    height: 150,
  }
});
