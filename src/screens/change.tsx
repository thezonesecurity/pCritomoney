import React, {Component} from "react";
import {Text, View, StyleSheet, Image, FlatList, TouchableHighlight} from "react-native"
import Mycolors from "../colors/mycolors";
import {Picker} from "@react-native-picker/picker"
import axios from "axios";
import {NavigationScreenProp} from "react-navigation";
import {StackNavigationProp, createStackNavigator} from "@react-navigation/stack";

//https://www.cryptocompare.com/media/37746238/eth.png
interface StateData {
  typemoney: string,
  dataResul: Array<any>
}
interface MyProps {
  //navigation: NavigationScreenProp<any,any>
  navigation: StackNavigationProp<any,any>
}

class Change extends Component<MyProps, StateData> {
  constructor(props: any) {
    super(props); 
    this.state= {
      typemoney: "BOB",
      dataResul: []
    }
  }
  async loadData(value: string) {
    this.setState({ //esto ace un stafo d espera asta k se cargue los datos
      dataResul: []
    })
    this.setState({
      typemoney: value
    });

    //var result: any = await axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym='+ value);
    var result: any = this.state;
    console.log(result);
    this.setState({
      dataResul: result.data.data
    })
  }
  componentDidMount() {
    this.loadData(this.state.typemoney);
  }
  onClickDetaild(params: any) {
    console.log(params);
    //this.props.navigation.navigate("Detaild", {...params, typemoney: this.state.typemoney});
    this.props.navigation.navigate("Detaild", {...params, typemoney: this.state.typemoney});
  }
  render() {
    return (
      <View style={styles.body}>
          <Text style={styles.title}>
              App CriptoCompare
          </Text>
          <View style={styles.containerImage} > 
            <Image style={styles.imageStyle} source={require("../../assets/img/bitcoin.png")}/>
            <Image style={styles.imageStyle} source={require("../../assets/img/eterium.png")}/>
            <Image style={styles.imageStyle} source={require("../../assets/img/money.png")}/>
          </View>
          <View style={styles.opcionlist}> 
            <Picker //para el boton d opciones
                selectedValue={this.state.typemoney}
                onValueChange={(itemValue, itemIndex) => {
                  /* sssssssssssssssss
                  this.setState({
                    typemoney: itemValue 
                  });*/
                 this.loadData(itemValue); 
                  
                }     
                } >
                <Picker.Item label="Boliviano" value="BOB" />
                <Picker.Item label="Dolar" value="USD" />
                <Picker.Item label="Euro" value="EUR" />
              </Picker>
          </View>
          <View >
         
              <FlatList // para la lista de intems NO SE VA A USAR FLATLIST
               data={this.state.dataResul} 
               renderItem={({item}) => (
                 <View style={styles.itemstyle}>
                    <View style={styles.textTitle}>
                      <Text>Name: {item.CoinInfo.FullName}</Text>
                      <Text>Price: {item.RAW[this.state.typemoney].PRICE} | {this.state.typemoney}</Text>
                    </View>
                    <View style={styles.imageStyleItems}>
                      <Image source={{ uri: "https://www.cryptocompare.com/" + item.CoinInfo.ImageUrl}} />
                    </View>
                 </View>
               )}
               keyExtractor={(item) => item.CoinInfo.Id}
               /> 
               <TouchableHighlight onPress={(item) => {
                 this.onClickDetaild(item);
               }}>
                 <View style={styles.itemstyle} >
                      <Text style={styles.textTitle} >name: Etherium {'\n'} price: 3012548 | {this.state.typemoney} </Text>
                      <Image style={styles.imageStyleItems} source={require("../../assets/img/money.png")}/>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={(item) => {
                 this.onClickDetaild(item);
               }}>
                 <View style={styles.itemstyle} >
                      <Text style={styles.textTitle} >name: Bitcoin {'\n'} price: 1254830 | {this.state.typemoney} </Text>
                      <Image style={styles.imageStyleItems} source={require("../../assets/img/money.png")}/>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={(item) => {
                 this.onClickDetaild(item);
               }}>
                 <View style={styles.itemstyle} >
                      <Text style={styles.textTitle} >name: Dogecoin {'\n'} price: 1288530 | {this.state.typemoney} </Text>
                      <Image style={styles.imageStyleItems} source={require("../../assets/img/money.png")}/>
                  </View> 
               </TouchableHighlight>
                
                  
                  
              
          </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  body: {
    backgroundColor: Mycolors.secondary,
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    paddingTop: 15,
    color: Mycolors.three,
    paddingVertical: 15,
  },
  imageStyle: {
    width: 110,
    height: 110,
  },
  imageStyleItems: {
    width: 55,
    height: 55,

  },
  containerImage: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  itemstyle: {
    marginTop: 10,
    backgroundColor: Mycolors.three,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  textTitle: {
    width: "80%"
  },
  opcionlist:{
    backgroundColor: Mycolors.four,
    marginTop: 10
  }
});
export default Change;


/* 
renderItem={({item}) => (
                 <Item 
                    name={item.name + ' Telf.' + item.telf}  
                    id={item._id} onEdit={(id) => {
                     
                 }}
                 />
               )}

               
*/