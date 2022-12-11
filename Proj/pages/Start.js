import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Line from '../components/Line';
import generalStyles from '../pages/style';

export default class Start extends Component {
    render() {
	const onPress = () => this.props.navigation.navigate('ModeSelection');
	const howto = () => this.props.navigation.navigate('HowTo');
    return (
    <View style={generalStyles.container}>
      <View>
        <Text style={generalStyles.header}>WIKI RACE</Text>
        <Line thickness={1} />
      </View>
      <View style={generalStyles.list}>
          <Button title='Play' fontSize={25} onPress={onPress}/>
		<Button title='How to Play' fontSize={25} onPress={howto}/>
        <StatusBar style="auto" />
      </View>
    </View>
    );
    }
}
