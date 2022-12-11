import { StatusBar } from 'expo-status-bar';
import {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/Button'
import Line from '../components/Line'
import generalStyles from './style'

export default class PageSelection extends Component {
    render(){
	const onPress = () => this.props.navigation.navigate('Finish');
  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.header}>Set the Game</Text>
      <Line thickness={1}/>
      <TextInput
        style={generalStyles.textInput}
        placeholder='Start Page'
        />
      <TextInput
        style={generalStyles.textInput}
        placeholder='End Page'
        />
	  <Button title="Play" onPress={onPress}/>  
    </View>
  );
    }
}
