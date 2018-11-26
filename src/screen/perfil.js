import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import Imput from '../components/imput';
import Button from '../components/button';
import Degrade from '../assets/fundo2.png';

export default class Perfil extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         <ImageBackground source={Degrade} 
          style={styles.bgimage}>
         <Imput placeholder="Login"/>
         <Imput placeholder="Senha"/> 
         <Button text='ENTRAR'/>
         </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {

    }
});