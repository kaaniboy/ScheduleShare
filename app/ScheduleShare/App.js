import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "Empty"
    };
  }

  onPress = () => {
    let self = this;

    fetch('http://localhost:3000/class/15411')
      .then((response) => response.json())
      .then((responseJson) => {
        self.setState({className: responseJson['class']});
        Alert.alert('Title', responseJson['class']);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.className}</Text>
        <Button
          onPress={this.onPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
