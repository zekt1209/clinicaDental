import React, {Component} from 'react';
//import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import CITAS from './citas';
import SERVICIOS from './servicios';
import ALTAS from './altas';
import BUSCAR from './buscar';
import CALENDARIO from './calendario';
import ELIMINAR from './eliminar';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


  export default function menu() {
    return (
    
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Citas') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if(route.name === 'Servicios') {
                  iconName = focused ? 'document-text' : 'document-text-outline';
                } else if(route.name === 'Altas') {
                  iconName = focused ? 'person-add' : 'person-add-outline';
                } else if(route.name === 'Buscar') {
                  iconName = focused ? 'md-brush' : 'md-brush-outline';
                } else if(route.name === 'Calendario') {
                  iconName = focused ? 'calendar' : 'calendar-outline';
                }else if(route.name === 'Eliminar') {
                  iconName = focused ? 'body' : 'body-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'brown',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Citas" component={CITAS} />
            <Tab.Screen name="Servicios" component={SERVICIOS} />
            <Tab.Screen name="Calendario" component={CALENDARIO} />
            <Tab.Screen name="Altas" component={ALTAS} />
            <Tab.Screen name="Buscar" component={BUSCAR} />
            <Tab.Screen name="Eliminar" component={ELIMINAR} />


          </Tab.Navigator>
        </NavigationContainer>

        
    );
}

const styles = StyleSheet.create({
  maintitle: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 20,
    fontFamily: 'verdana',
    //textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,

    //justifyContent: 'flex-start',
  },

  tinyLogo: {
    width: 400,
    height: 300,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },

  mainimage: {
    alignItems: 'center',
  },

  secondContainer: {
    width: 400,
    height: 600,
    backgroundColor: '#dfe4ea',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },

  reseñas: {
    width: 220,
    height: 64,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});
