import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';

export default class eliminar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        descripcion: '',
        datos:[],
    };
  }

  render() {

    const btnBusqueda = () => {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            var temp = JSON.parse(xhttp.responseText);
            _this.setState({datos: temp});
          }
        };
        xhttp.open(
          'GET',
          'https://zekt1209.000webhostapp.com/buscar.php?descripcion=' +
            this.state.descripcion,
          true,
        );
        xhttp.send();
      };
  
      const btnBajas = () => {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            var temp = xhttp.responseText;
            _this.setState({datos: temp});
          }
        };
        xhttp.open(
          'GET',
          'https://zekt1209.000webhostapp.com/eliminartratamiento.php?descripcion=' +
            this.state.descripcion,
          true,
        );
        xhttp.send();
      };

    return (
      <View>
        <Text style={styles.h1}> Eliminar </Text>

        <Input
            placeholder="Descripcion"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={descripcion => this.setState({descripcion})}
          />

          <Button
            icon={<Icon name="user-plus" size={15} color="white" />}
            title="Buscar"
            onPress={btnBusqueda}
            color="#d12626"
          />


<FlatList
            data={this.state.datos}
            contentContainerStyle={{
              padding: 20,
            }}
            renderItem={({item}) => {
              return (
                <ScrollView>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 15,
                      marginBottom: 15,
                      backgroundColor: '#dcdde1',
                      borderRadius: 12,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 10},
                      shadowOpacity: 0.4,
                      shadowRadius: 20,
                    }}>
                    <Image
                      source={{uri: item.Imagen}}
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 90,
                        marginRight: 30,
                      }}
                    />

                    <View>
                      <Text style={{fontSize: 22, fontWeight: '400'}}>
                        {item.Nombre}
                      </Text>
                      <Text style={{fontSize: 20, opacity: 0.8}}>
                        {item.Codigo}
                      </Text>
                      <Text
                        style={{fontSize: 22, opacity: 0.8, color: '#2c3e50'}}>
                        {item.Centro}
                      </Text>
                    </View>

                    <View style={{marginTop: 20}}>
                      <Text style={{fontSize: 22, fontWeight: '400'}}>
                        ¿Eliminar este usuario?
                      </Text>
                    </View>

                    <Button
                      icon={<Icon name="user-plus" size={15} color="white" />}
                      title=" Eliminar"
                      onPress={btnBajas}
                    />
                  </View>
                </ScrollView>
              );
            }} // Fin de la flatlist: linea 112
            //keyExtractor={item => item.Codigo}
          />
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
    titulo: {
      fontSize: 30,
      textAlign: 'center',
    },
    Alta: {
      width: 250,
      marginTop: 20,
      marginLeft: 20,
    },
    imagen: {
      width: 100,
      height: 100,
      marginLeft: 20,
      marginTop: 20,
    },
    boton: {
      marginTop: 20,
      width: 100,
      marginLeft: 150,
    },
    h1:{
      fontSize: 22,
      fontWeight:'400', 
      textAlign:'center',
    },
  });