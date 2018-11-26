import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import Imput from '../components/imput';
import Button from '../components/button';
import Texto from '../components/texto';
import Degrade from '../assets/fundo2.png';
import Logo from '../components/logo';



export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
        <Logo/>
        <View style={styles.botoes}>
          <View style={styles.botoesItens}>
            <Imput placeholder="Login"/>
            <Imput placeholder="Senha"/> 
            <Button text='ENTRAR'/>
            <Texto text='Desenvolvido por:'/>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    justifyContent: 'space-evenly',
  },
  bgimage:{
    flex:1,
    width:null,
    opacity: 0.65
  },
  botoes:{
    height:'60%'
  },
  botoesItens:{
    height:'100%'
  }
});
