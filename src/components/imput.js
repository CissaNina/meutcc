import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Imput extends React.Component {
  
  choosePlaceholderColor = () => {
    switch(this.props.placeholderColor) {
      default: 
        return '#000'; 
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.Imput} placeholder={this.props.placeholder}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      height:'20%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Imput:{
      width:'70%',
      height:'60%',
      alignSelf:'center',
      paddingLeft:10,
      borderRadius:10,
      backgroundColor:'#fff',
    }
  });
  