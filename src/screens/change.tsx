import React, {Component} from "react";
import { ChangeEventHandler } from "react";
import {Text, View, StyleSheet, Image, FlatList} from "react-native"
import Mycolors from "../colors/mycolors";
import {Picker} from "@react-native-picker/picker"
import axios from "axios";
//https://www.cryptocompare.com/media/37746238/eth.png
interface StadeData {
  typemoney: string,
  dataResul: Array<any>
}
class Change extends Component<any, StadeData> {
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

    var result: any = await axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym='+ value);
    console.log(result);
    this.setState({
      dataResul: result.data.data
    })
  }
  componentDidMount() {
    this.loadData(this.state.typemoney);
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
              <FlatList //para la lista de intems
               data={this.state.dataResul} 
               renderItem={({item}) => (
                 <View style={styles.itemstyle}>
                    <View style={styles.textTitle}>
                      <Text>Name: {item.CoinInfo.FullName}</Text>
                      <Text>Price: {item.RAW[this.state.typemoney].PRICE} | {this.state.typemoney}</Text>
                    </View>
                    <View style={styles.imageStyleItems}>
                      <Image source={{ uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl}} />
                    </View>
                 </View>
               )}
               keyExtractor={(item) => item.CoinInfo.Id}
              />
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
    marginTop: 15,
    backgroundColor: Mycolors.secondary,
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