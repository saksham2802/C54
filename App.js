import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class RedButton extends Component{
  displayAlert(){
    alert("Alert Message")
  }
  render(){
    return <Button color="green" title ="Press" onPress={this.displayAlert}/>

  }
} 
class BlueButton extends Component{
  displayAlert(){
    alert("ALERT")
  }
render(){

  return <Button  color={this.props.color} title="Add" onPress={this.displayAlert} />
 }
  }
class GreenButton extends Component{
  render(){
    return<Button color="black" title="Go" onPress={this.displayAlert}/>
  }
}
class BlackButton extends Component{
  render(){
  return<Button color="red" title="Ok"/>
  }
}
class OrangeButton extends Component{
  render(){
return<Button color="orange" title="K"/>
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:400}}>
      <RedButton />
      <BlueButton color="purple"/>
      <BlueButton color="brown"/>
      <GreenButton/>
      <BlackButton/>
      <OrangeButton/>
    <Text>First </Text>
  </View>
    );
  }
}