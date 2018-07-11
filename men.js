import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MenScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Men Screen</Text>
            </View>
        );
    }
}
  
export default createStackNavigator({
    Home: {
      screen: MenScreen
    },
});