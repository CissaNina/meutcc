import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Jc from '../assets/logo-jc.png';


class Logo extends React.Component {
    render() {
      return (
        <View style={styles.container}>
           <Image
        style={{width: 180, height: 160}}
        source={Jc}
      /> 
        </View>
            
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
  
    });


export default Logo;  