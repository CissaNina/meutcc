import React from 'react';
import { StyleSheet, View, ImageBackground, Picker,Image } from 'react-native';

import Imput from '../components/imput';
import Texto from '../components/texto';
import Degrade from '../assets/fundo2.png';
import Man from '../assets/human.png';
import Jc from '../assets/logo-jc.png';

export default class Perfil extends React.Component {
  constructor(props){
      super (props);
      this.state = {
        opcao:0,
        sexo:[
          {nome:'Sexo', valor:10},
          {nome: 'Feminino', valor:30},
          {nome:'Masculino', valor:20},
          {nome:'Não Informar', valor:50}
        ]
      };
  }  
    render() {
      let opcaoItems = this.state.sexo.map(
        (v,k)=>{
          return <Picker.Item key={k}
          label={v.nome}/>
        });
      return (
        <View style={styles.container}>
         <ImageBackground source={Degrade} 
          style={styles.bgimage}>
          <View style={styles.topo}>
            <Texto text='Uma vez Jovens Construtores, sempre Jovens Construtores.'/>
            <Image source={Jc} style={styles.topo2}/>
          </View>
          <View style={styles.foto}>
            <Image source={Man} style={styles.homenzinho}/>
          </View>
         <Imput style={styles.editavel} placeholder="Nome"/>
         <View style={styles.selectOpcao}>
          <Picker selectedValue={this.state.opcao} 
          onValueChange={(itemValue,ItemIndex) => 
          this.setState({opcao:itemValue})}>
            {opcaoItems}
          </Picker>
        </View>
         <Imput placeholder="Edição"/> 
         </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    bgimage:{
      flex:1,
      width:null,
    },
    topo:{
      width:'100%',
      height:80,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    topo2:{
      marginRight:20,
      width:'15%',
      height:48
    },
    selectOpcao:{
      width:'70%',
      height:60,
      borderRadius: 10,
      backgroundColor:'#fff',
      marginLeft: 52,
    },
    editavel:{
      backgroundColor:'red',
      height:10
    },
    foto:{
      // backgroundColor:'red',
      width:'100%',
      height:150,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:30
    },
    homenzinho:{
      width:'40%',
      height:140,
      borderRadius:100,
    }
});