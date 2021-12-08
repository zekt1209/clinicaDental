import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class servicios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      refreshing: false,
    };
  }

  componentDidMount = () => {
    let _this = this;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var temp = JSON.parse(xhttp.responseText);
        _this.setState({datos: temp});
      }
    };
    xhttp.open(
      'GET',
      'https://zekt1209.000webhostapp.com/mostrartratamientos.php',
      true,
    );
    xhttp.send();
    
    this.setState({
      refreshing: false,
    });
  };

  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
      seed: this.state.seed + 1,

    }, () => {
      this.componentDidMount();
    })
  };

  render() {
    return (
     // <ScrollView>
     <View style = {{flex: 1, backgroundColor: '#2c3e50',}}>

        <View>
          <Text style = {styles.title}> Servicios </Text>
        </View>
        
        

        <FlatList
          data={this.state.datos}
          contentContainerStyle={{
            padding: 20,
          }}
          renderItem={({item}) => {
              return <View style={{flexDirection: 'row', padding:15, marginBottom:15, backgroundColor:'#dcdde1', borderRadius:12,
                shadowColor: "#000",
                shadowOffset: {width:0, height:10},
                shadowOpacity:.4,
                shadowRadius:20

                  }}>

                <Image 
                     source={{uri: item.imagen}}
                    style={{width: 90, height:90, borderRadius:90, marginRight:30}}
                />

                  <View>
                       <Text style={{fontSize:22, fontWeight:'400'}}>{item.id_tratamiento}</Text>
                       <Text style={{fontSize:20, opacity:.8}}>{item.descripcion}</Text>
                        <Text style={{fontSize:22, opacity:.8, color:'#2c3e50'}}>$ {item.precio}</Text>
                   </View>


                   </View>

                  }}
                  keyExtractor={item => item.id_tratamiento}
                  refreshing = {this.state.refreshing}
                  onRefresh={this.handleRefresh}
                  />  
          

        </View>
      //</ScrollView>

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
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
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
