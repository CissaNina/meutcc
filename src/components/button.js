import React from 'react';
import { StyleSheet,TouchableHighlight , Text, View  } from 'react-native';

export default class Button extends React.Component {
    render() {
      return (
        <TouchableHighlight style={styles.container} onPress={() => console.log("called")}
        underlayColor='#FF9000'>
        <View style={styles.container2}> 
            <Text style={styles.text}>{this.props.text}</Text>
            </View>
        </TouchableHighlight>
            
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '70%',
        height:50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 52,
        margin: 10
        
      },
      text:{
        fontSize: 15,
      }
  
    });
  