import React, { Component } from 'react';
import {WebView} from "react-native-webview";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class HowTo extends Component {
  
  render() {
          let web = {
      uri: 'https://en.wikipedia.org/wiki/Wikipedia:Wikirace',
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
	if (webViewState.url == 'https://en.wikipedia.org/wiki/Wikipedia:Wikirace'){
		 console.log('success')
	}
	}
}
