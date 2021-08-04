import React, {Component} from "react";
import {StyleSheet} from "react-native";
import Mycolors from "../colors/mycolors";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Change from "./change";
import Detaild from "./detaild";
 
var Stack = createStackNavigator();
class MainChange extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state= {
      typemoney: "",
    }
  }

  
  render() {
    return (
      <NavigationContainer independent= {true}>
          <Stack.Navigator>
              <Stack.Screen name="change" component={Change}></Stack.Screen>
              <Stack.Screen name="detaild" component={Detaild}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
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
export default MainChange;