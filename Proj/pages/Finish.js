import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Finish extends Component {
  
  constructor(props) {
        super(props);
        this.state = 
		{
			navParams:  this.props.route.params
		};
    
	
		/*function millisToMinutesAndSeconds(millis) {
		  var minutes = Math.floor(millis / 60000);
		  var seconds = ((millis % 60000) / 1000).toFixed(0);
		  return (
		  seconds == 60 ?
		  (minutes+1) + ":00" :
		  minutes + ":" + (seconds < 10 ? "0" : "") + seconds
			);
		}*/
  }

  
  render() {
      const onPress = () => this.props.navigation.navigate('ModeSelection');
    return (
      <View style={styles.container}>
          <Text style={styles.textContainer}>
	      FINISHED{"\n"}
	      Kirby  --->  Mount Rushmore{"\n"}
	      {/*Time : {this.millisToMinutesAndSeconds(this.state.navParams.time)}{"\n"}*/}
	      Time : this.state.navParams.time{"\n"}
		  Pages : 37

	  </Text>

	  	{/*added navigation section*/}
        <View style={{padding: 25}}/>   

	<TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style = {{fontSize: 18, color: "white"}}>Race Again</Text>
	</TouchableOpacity>
	  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
      },
    
  button: {
    alignItems: "center",
    borderWidth: 1.5,
      padding: 10,
      backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  textContainer: {
      alignItems: "center",
      padding: 10,
      textAlign: "center",
      fontSize: 18,
      borderWidth: 1.5
  }
});
