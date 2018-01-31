import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleInput = () => {
    const { text } = this.state;
    alert(text);
  };

  render() {

    timeout = null;
    return (
      <View style={{padding: 40}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                this.setState({text: text}, () => { this.handleInput() })
              }, 1500);
            }}
          />
          <Text style={{padding: 10, fontSize: 25}}>
            {this.state.text}
          </Text>
      </View>
    );

  }
}
