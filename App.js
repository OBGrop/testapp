// import Expo from 'expo';
import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage,  } from 'react-native-elements'
import { MenScreen } from './men'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="You are men ? ,Click"
                    onPress={() => this.props.navigation.navigate('Details', {
                            sex: 'men',
                        })
                    }
                />
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
  
  onchangeName = (name)=>(event)=>{
    console.log(name)
    console.log(event)
    this.setState({
      data:{
        ...this.state.data,
        name:event,
        age: this.state.data.age,
      }
      
    })
  }
  
  onchangeAge(event){
    this.setState({
      data:{
        ...this.state.data,
        name:this.state.data.name,
        age:event,
      }
      
    })
  }

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
          onPress={() => this.props.navigation.navigate('Authen',)
        
          }
        />

      </View>
    );
  }
}

class InputAuthentication extends React.Component {

  render(){
    return(
      <View style={{padding: 10}}>
        <Text>useranme</Text>
        <TextInput
          ref="age"
          style={{height: 40, width: 80 }}
          placeholder="age"
          // onChangeText={(age) => this.onchangeAge(age)}
          onChangeText={(age) => this.setState({ data:{...this.state.data,age:age} }) } 
        />
        
        <Text>password</Text>
         <TextInput
          ref="age"
          style={{height: 40, width: 80 }}
          placeholder="age"
          // onChangeText={(age) => this.onchangeAge(age)}
          onChangeText={(age) => this.setState({ data:{...this.state.data,age:age} }) } 
        />
      </View>
    )
  }

} 

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Authen: InputAuthentication
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
// export default createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });



