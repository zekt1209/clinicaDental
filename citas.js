import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class citas extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {



    return (

      <ScrollView>

        <View style = {{flex: 1, backgroundColor: '#2c3e50', height: 1000}}>
          <Text style={styles.maintitle}> Clinica Dental </Text>
          <View style={styles.mainimage}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://gacetadental.com/wp-content/uploads/2020/01/Profesionales-Clinica-Dental.jpg',
              }}
            />
          </View>

          <View style={styles.secondContainer}>
            <Text style={styles.title}>Agenda una cita con nosotros !!!</Text>
            <Text style={styles.paragraph}>
              Quieres mejorar la calidad de tu boca? Acudir a esta clinica
              dental es tu mejor opcion, tenemos referencias de clientes
              satisfechos con nuestros trabajos, mas de 10 años de experiencia
              nos respaldan.
            </Text>

            <View>
              <Image
                source={require('./imagenes/reseña.png')}
                style={styles.reseñas}
              />
            </View>
          </View>

        </View>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  maintitle: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
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

  reseñas: {
    width: 220,
    height: 64,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});
