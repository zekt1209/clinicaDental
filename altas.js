import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Input, Image, Button} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      fileUri: '',
      id_tratamiento: '',
      descripcion: '',
      precio: '',
      imagen: '',
      rutai: '',
    };
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.imagen} />;
    } else {
      return (
        <Image source={require('./pictures/agregar.png')} style={styles.imagen} />
      );
    }
  }

  uploadImageToServer = async () => {
    const response = await fetch(this.state.fileUri);
    const blob = await response.blob();
    var reader = new FileReader();
    reader.onload = () => {
    
    var InsertAPI = 'http://zekt1209.000webhostapp.com/uploadtratamientos.php';
    console.log(reader.result);
    var Data={img:reader.result};
    var headers={
    'Accept':'application/json',
    'Content-Type':'application.json'
    }
    fetch(InsertAPI,{
    method:'POST',
    headers:headers,
    body:JSON.stringify(Data),
    }).then((response)=>response.json()).then((response)=>{
    console.log("server "+response)
    })
    .catch(err=>{
    console.log(err);
    
    })
    }
    reader.readAsDataURL(blob);
    }



  render() {



    const accesofotos = () => {
      ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
        },
        response => {
          console.log(response);
          var source = response;
          var array = Object.keys(source).map(function (key) {
            return source[key];
          });
          var finalArray = array[0][0];
          this.setState({fileUri: finalArray.uri});
          this.uploadImageToServer();
          // console.log(finalArray.uri);
        },
      );
    };

    const AltaTratamientos = () => {
      var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
         console.log(xhttp.responseText);
       }
     };
     xhttp.open(
       'GET',
       'https://zekt1209.000webhostapp.com/authtratamientos.php?id_tratamiento='+ this.state.id_tratamiento + '&descripcion=' + this.state.descripcion + '&precio=' + this.state.precio + '&imagen=' + this.state.fileUri,
       true
     );
     xhttp.send(); 
     this.setState({refreshing: true});

     Alert.alert('Insertado con exito !')
    }



    return (
      <View style = {{flex: 1, backgroundColor: '#2c3e50',}}>
        <View style = {styles.secondContainer}>
          <ScrollView>
            <View >
              <Text style = {styles.titulo}> Nuevo tratamiento </Text>
            </View>

            <View style = {styles.Alta}>
              <Input
              placeholder = 'ID de tratamiento'
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={id_tratamiento => this.setState({id_tratamiento})} >
              </Input>
            </View>

            <View style = {styles.Alta}>
              <Input
              placeholder = 'Descripcion'
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={descripcion => this.setState({descripcion})} >
              </Input>
            </View>


            <View style = {styles.Alta}>
              <Input
                placeholder = 'Precio'
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={precio => this.setState({precio})} >
              </Input>
            </View>

              <View style={styles.avatar}>
                <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>Imagen de tratamiento:</Text>
                <TouchableOpacity onPress={accesofotos}>
                  {this.renderFileUri()}
                </TouchableOpacity>
              </View>

              <View style = {{marginTop: 50, width: 150, marginLeft: 130}}>
                <Button
                  icon={<Icon name="user-plus" size={15} color="white" />}
                  title=" Guardar"
                  onPress={AltaTratamientos}
                  style={styles.altabutton}
                >
                  <Text style = {styles.titulo}>Tratamiento insertado con exito !!</Text>
                </Button>
              </View>

            


          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  Alta: {
    width: 250,
    marginTop: 20,
    marginLeft: 20,
  },
  avatar: {
    marginTop: 20,
    marginLeft: 20
  },
  imagen: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  altabutton: {
    alignItems: 'center', 
    justifyContent: 'center',
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
    marginRight: 5,
    marginBottom: 5,
    paddingLeft: 10,
    alignItems: 'center',
    flex: 1,
  },
});