import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Enter Mobile No.'};
        this.handleChange = this.handleChange.bind(this); 
      }
    handleChange(text) {
        this.setState({text: text});
    }
    render() {
      return (
        <View style={styles.container}>
            <View >
                <Text style={styles.textMain}>Start Building Other Components Kartikeya!</Text>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    outer: {
        backgroundColor: '#8C9FA8'
    },
    container: {
      flex: 3,
      backgroundColor: '#8C9FA8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textMain: {
        color: '#fff',
        fontSize: 27,
        marginTop: 36
    }
  });