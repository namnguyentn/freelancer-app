import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';
import { Search } from './common/';

export default class HomeScreen extends Component{
	
	searchResults({results, index}){
		return(
			<View style={{width: 100, height: 100}}>
			</View>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Freelancer</Text>
				<Text style={styles.slogan}>The easiest way to find your services</Text>
				<Search />
				<FlatList
				data={[{key: 'a'}, {key: 'b'}]}
				renderItem={this.searchResults}
			  />
			</View>
		);
	}
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};


const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  justifyContent: 'center',
	  alignItems: 'center'
	},
	logo: {
		color: 'white',
		fontSize: 40,
	},
	slogan: {
		color: 'white',
		fontSize: 16
	}
};
  
