import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    containerInputs:{
        marginTop: 8,
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#F9F9F9'
    },
    containerBtn:{
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    btnIngresar: {
        width: '70%',
        height: '25%',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      cadena:[],
    };
  }
    render(){
        const goToRegister = () => (this.props.navigation.navigate('Register'));
      
         return (
            <View style={{ flex: 1, marginTop: 5}}>
                <View style={styles.title}><Text style={{ fontSize: 30}}>Iniciar Sesión</Text></View>
                <View style={styles.containerInputs}>
                    <Text>Usuario</Text>
                    <View style={styles.inputs}><TextInput></TextInput></View>
                </View>
                <View style={styles.containerInputs}>
                    <Text>Contraseña</Text>
                    <View style={styles.inputs}><TextInput secureTextEntry={true}></TextInput></View>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnIngresar}><View><Text style={{ fontSize: 20}}>Ingresar</Text></View></TouchableOpacity>
                    <TouchableOpacity onPress={goToRegister}><Text style={{ marginTop: 5}}>Registrarse</Text></TouchableOpacity>
                </View>
            </View>
          );
    }
}