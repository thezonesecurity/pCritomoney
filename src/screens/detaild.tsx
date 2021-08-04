import React, {Component} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Mycolors from "../colors/mycolors";
import {NavigationScreenProp} from "react-navigation";

interface Params {
  Algoritgm: string,
  imagenUrl: string,
  id: string,
  name: string
}
interface Route {
 params: Params;
 key: string,
 name: string
}
interface MyProps {
  navigation: NavigationScreenProp<any, any>
  route: Route
}
interface MyState {
  typemoney: string,
}
class Detaild extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state= {
      typemoney: "",
    }
  }
  
  componentDidMount() { //carga datos a memoria y se ejecuta antes k el render()
    console.log("load params")
    console.log(this.props.route);
    console.log(this.props.route.name);
    console.log(this.props.route.key);
    this.setState({
      name: this.props.route.name,
      key: this.props.route.key,
      params: this.props.route.params
    });
    
  }
  componentWillReceiveProps() { //carga datos cada ves k recibe props
    
  }//1:01
  componentDidUpdate() { //carga datos pero esto update y se ejecuta antes k el render()
    
  }
  render() {
    return (
      <View style={styles.body}>
          <Text style={styles.title}>
              Detaild CriptoCompare
          </Text>
          <View style={styles.containerImage} > 
            <Image style={styles.imageStyle} source={require("../../assets/img/bitcoin.png")}/>
            <Image style={styles.imageStyle} source={require("../../assets/img/eterium.png")}/>
            <Image style={styles.imageStyle} source={require("../../assets/img/money.png")}/>
          </View>
          <View>
            <Text> Name: {this.props.route.name}</Text>
            <Text> key: {this.props.route.key}</Text>
            <Text> Money: {this.state.typemoney}</Text>
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
export default Detaild;