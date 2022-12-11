import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'
import Line from '../components/Line'
import generalStyles from './style'

export default function ModeSelection(props) {
  return (
    <View style={generalStyles.container}>
      <View>
        <Text style={generalStyles.header}>Choose mode</Text>
        <Line thickness={1} />
          <Text style={generalStyles.text}>Click Random, if you want a random game. Otherwise, click Daily Challenge to test yourself with the Daily Challenge.</Text>
      </View>
      <View style={generalStyles.list}>
        <Button title='Random' fontSize={25} onPress={() => props.navigation.navigate('RandomGoal')}/>
        <Button title='Daily Challenge' fontSize={25}  onPress={() => props.navigation.navigate('DailyGoal')}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
