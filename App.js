import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue : false,
      textInput: '',
    }
  }

  onPressLearnMore = () => {
    alert(this.state.textInput)
  }

  onChange = value => {
    console.warn(`El valor del switch es: ${value}`)
    this.setState({switchValue: value})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo..."
          onChangeText = {text => this.setState({textInput: text})}
          value = {this.state.textInput}
        />
        <Switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
          value = {this.state.switchValue}
        />
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
  }
});