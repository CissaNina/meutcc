import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Texto extends React.Component {
    chooseTextColor = () => {
        switch(this.props.textColor) {
            case 'white':
                return '#FFF';
            default: 
                return '#000'; 
        }
    };

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.text}</Text>
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
    }
  
 });


export default Texto;  