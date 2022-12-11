import React, { Component } from 'react';
import {WebView} from "react-native-webview";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

const startTime = Date.now();

export default class HowTo extends Component {

    constructor(props) {
	super(props);
	//this.state.navParams = {completionTime: }
    }
    
  render() {
          let web = {
      uri: 'https://en.wikipedia.org/wiki/Kirby_(character)',
    };
	  		  
      return ( 
	  <WebView 
	  source={web}
	  onNavigationStateChange={this._onNavigationStateChange.bind(this)}
	  />
	  
      );
  }
  
	_onNavigationStateChange(webViewState){
	    console.log(webViewState.url)
	if (webViewState.url == 'https://en.m.wikipedia.org/wiki/Japanese_language'){
	    console.log('FINISHED')
		endTime = Date.now();
		completionTime = endTime - startTime;
		console.log(completionTime);
		//this.state.navParams = completionTime;
	    this.props.navigation.push('Finish', {time: completionTime})
	    
	}
	}
}
