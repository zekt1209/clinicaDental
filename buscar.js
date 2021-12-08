import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';



export default class buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: '',
      descripcionP: '',
      precio: '',
      precioP: '',
      fileUri:'',
      rutai:'',
      datos:[],
      refreshing: true,
    };
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.imagen} />;
    } else {
      return (
        <Image source={require('./pictures/user.png')} style={styles.imagen} />
      );
    }
  }

  uploadImageToServer = async () => {
    const response = await fetch(this.state.fileUri);
    const blob = await response.blob();
    var reader = new FileReader();
    reader.onload = () => {
    
    var InsertAPI = 'http://zekt1209.000webhostapp.com/upload.php';
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
    console.log("server "+response);
    this.setState({
        rutai: 'https://zekt1209.000webhostapp.com/' + response,
        });
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

    const btnBusqueda = () => {
      let _this = this;
       const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText);
          var temp = JSON.parse(xhttp.responseText);
          _this.setState({ nombre: temp[0]['descripcion'] });
          _this.setState({ precio: temp[0]['precio'] });
          _this.setState({ precioP : temp[0]['precio'] });
          _this.setState({ fileUri: temp[0]['imagen'] });
          _this.setState({ rutai: temp[0]['imagen'] });
          _this.setState({ descripcionP: temp[0]['descripcion'] });
        }
      };
      xhttp.open(
        'GET',
        'https://zekt1209.000webhostapp.com/buscartratamiento.php?descripcion='+
          this.state.descripcion,
        true
      );
      xhttp.send(); 
      this.setState({refreshing: false});
    }



    const AltaDatos = () => {
      var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
         console.log(xhttp.responseText);
       }
     };
     xhttp.open(
       'GET',
       'https://zekt1209.000webhostapp.com/modificartratamientos.php?descripcion='+ this.state.descripcion + '&precio=' + this.state.precio + '&imagen=' + this.state.rutai,
       true
     );
     xhttp.send(); 
     this.setState({refreshing: true});
    }

    if (this.state.refreshing){
    return (
      <View>
        <Text style={styles.h1}> Buscar </Text>

            <Input
                placeholder="Descripcion"
                leftIcon={<Icon name="user" size={24} color="black" />}
                onChangeText={descripcion => this.setState({descripcion})}
            />

            <Button 
            icon={<Icon name="user-plus" size={15} color="white" />}
            title=" Buscar"
            onPress={btnBusqueda}
            />
        
      </View>
    );
    }

    return (
      <View>

      <ScrollView>
        <View style={styles.Alta}>
          <Input
            placeholder={this.state.descripcionP}
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={descripcion => this.setState({descripcion})}
          />
        </View>

        <View style={styles.Alta}>
          <Input
            placeholder={this.state.precioP}
            leftIcon={<Icon name="money" size={24} color="black" />}
            //secureTextEntry={true}
            onChangeText={precio => this.setState({precio})}
          />
        </View>


        <View>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text>Imagen Tratamiento</Text>
          </View>
          <TouchableOpacity onPress={accesofotos}>
            {this.renderFileUri()}
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, width: 100, marginLeft: 150}}>
          <Button
            icon={<Icon name="user-plus" size={15} color="white" />}
            title="Modificar"
            onPress={AltaDatos}
          />
        </View>
        
        </ScrollView>

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