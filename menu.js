import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.maintitle}> Clinica Dental </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maintitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center', 
}
});
