import React, { Component } from 'react';
import { AppRegistry, Stylesheet,Image, View, Text } from 'react-native';

class Greeting extends Component {
   render() {
   return (
   <Text>Hello {this.props.name}!</Text>
   );
   }
}
class LotsOfGreetings extends Component {
   render() {
   return(
   <View style={{alignItems:'center'}}>
   <Greeting name = 'java'/>
   <Greeting name = 'c语言'/>
   <Greeting name = 'c++'/>
   </View>
   );
   }
}
AppRegistry.registerComponent('MyReactNativeApp', () => LotsOfGreetings);