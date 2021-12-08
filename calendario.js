import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Input, Image, Button} from 'react-native-elements';


export default class calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Calendario </Text>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black', marginBottom: 20}}> Agrenda tu cita !! </Text>



        <View>
            <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2012-05-17': {marked: true},
                '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2012-05-19': {disabled: true, disableTouchEvent: true}
            }}
            />
        </View>

        <View>
            <Button title="Agendar">Agendar</Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      color: 'black',
      borderWidth: 2,
      borderColor: 'black',
    },
    secondContainer: {
      //width: 400,
      //height: 600,
      backgroundColor: '#dfe4ea',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 20,
      marginLeft: 5,
      paddingLeft: 10,
      alignItems: 'center',
      flex: 1,
    },
  
  });