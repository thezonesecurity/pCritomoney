import React, {Component} from "react";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Change from "./src/screens/change";
import Detaild from "./src/screens/detaild";
import Icons from "react-native-vector-icons/AntDesign";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Mycolors from "./src/colors/mycolors";
const Tab = createBottomTabNavigator();
//26:00 video 3
class App extends Component {
  render() {
    return (
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Change': {
                  if (focused) {
                    return (
                      <FontAwesomeIcons name="bitcoin" size={23} color={Mycolors.secondary} />
                    );
                  } else {
                    return (
                      <FontAwesomeIcons name="bitcoin" size={23} color={Mycolors.three} />
                    );
                  }
                }
                case 'Detaild': {
                  if (focused) {
                    return (
                      <Icons name="form" size={23} color={Mycolors.secondary} />
                    );
                  } else {
                    return (
                      <Icons name="form" size={23} color={Mycolors.three} />
                    );
                  }
                }

              }
            },
          })}
        >
          <Tab.Screen name="Change" component={Change} />
          <Tab.Screen name="Detaild" component={Detaild} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;