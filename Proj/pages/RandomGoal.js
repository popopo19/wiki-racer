import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'
import Line from '../components/Line'
import generalStyles from './style'

export default function ModeSelection(props) {
  return (
    <View style={generalStyles.container}>
      <View>
        <Text style={generalStyles.header}>Random</Text>
        <Line thickness={1} />
          <Text style={generalStyles.text}>Your randomly generated route is {"\n"}Kirby ---> Mount Rushmore</Text>
      </View>
      <View style={generalStyles.list}>
        <Button title='Play' fontSize={25} onPress={() => props.navigation.navigate('PlayScreen')}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
