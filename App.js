// import Expo from 'expo';
import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage,  } from 'react-native-elements'
import { MenScreen } from './men'
import {WomenScreen } from './women'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize:30 }}>Home Screen</Text>
                <Text></Text>
                <Button
                    title="You are men ? ,Click"
                    onPress={() => this.props.navigation.navigate('Men', {
                            sex: 'men',
                        })
                    }
                />
                <Text></Text>
                <Button
                    title="You are women ? ,Click"
                    onPress={() => this.props.navigation.navigate('Details', {
                            sex: 'women',
                        })
                    }
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        name: '',
        age:''  } 
       };
  }
  
  // onchangeName(event){
  //   this.setState({
  //     data:{
  //       ...this.state.data,
  //       name:event,
  //       age: this.state.data.age,
  //     }
      
  //   })
  // }
  
  // onchangeAge(event){
  //   this.setState({
  //     data:{
  //       ...this.state.data,
  //       name:this.state.data.name,
  //       age:event,
  //     }
      
  //   })
  // }

  render() {
    console.log(this.state.data)
    //const { navigation } = this.props;
    //const sex =  navigation.getParam('sex','-');

    const sex =  this.props.navigation.getParam('sex','-');
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>You are { sex } !!</Text>
        
        <Text>Name </Text>
        <TextInput
          ref="name"
          style={{height: 40,width: 120 }}
          placeholder="name"
          // onChangeText={(name) => this.onchangeName(name) }
          onChangeText={(name) => this.setState({ data:{...this.state.data,name:name} }) }
        />

        <Text>Age </Text>
        <TextInput
          ref="age"
          style={{height: 40, width: 80 }}
          placeholder="age"
          // onChangeText={(age) => this.onchangeAge(age)}
          onChangeText={(age) => this.setState({ data:{...this.state.data,age:age} }) } 
        />

        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Authen',{sex:sex,data:this.state.data},) }
        />

      </View>
    );
  }
}

class InputAuthentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAuthen:{
        username:'',
        password:''
      }
      
       };
  }

  render(){ 
    console.log('navigation+++',this.props.navigation)
    // console.log(this.props.navigation.state.params)
    const {navigation} = this.props
    const sex = navigation.state.params.sex
    const name = navigation.state.params.data.name
    const age = navigation.state.params.data.age
    return(
      <View style={{padding: 10,paddingLeft:30, }}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>Sex: {sex}</Text>
        <Text></Text>

        <Text>useranme</Text>
        <TextInput
          ref="username"
          style={{height: 40, width: 100 }}
          placeholder="username"
          onChangeText={(usernameValue) => this.setState({ dataAuthen:{...this.state.dataAuthen,username:usernameValue} }) }
          value={this.state.dataAuthen.username} 
        />
        
        <Text>password</Text>
         <TextInput
          ref="password"
          style={{height: 40, width: 100 }}
          placeholder="password"
          onChangeText={(passwordValue) => this.setState({ dataAuthen:{...this.state.dataAuthen,password:passwordValue} }) } 
          value={this.state.dataAuthen.password}
        />

        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Men') }
        />
        <Text></Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate('Details') }
          // onPress={() => this.props.navigation.navigate('Details',this.props.navigation) }
        />

      </View>
    )
  
  }

} 

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Authen: InputAuthentication,
    // Men: MenScreen,
    // Women: WomenScreen
  },
  {
    initialRouteName: 'Home',
  }
);

// const SwitchFile = createSwitchNavigator(
//   {
//     Home: HomeScreen,
//     // Men: MenScreen,
//   }
// )

export default class App extends React.Component {
  render() {
    // return <SwitchFile/>;
    return <RootStack/>;
  }
}


