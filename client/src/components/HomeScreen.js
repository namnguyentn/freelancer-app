import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import Search from './Search';


class HomeScreen extends Component{

	constructor(){
		super();
		this.presetColors = {
			mainBackground: [
				'rgb(54, 104, 151)',
				'rgb(54, 120, 159)',
				'rgb(55, 133, 166)',
				'rgb(56, 145, 173)',
				'rgb(57, 158, 180)',
				'rgb(59, 171, 187)',
				'rgb(60, 185, 184)'
			],
		};
	}
	
	render() {
		return (
			<AnimatedLinearGradient customColors={this.presetColors.mainBackground} speed={4000}>
				<Search />
			</AnimatedLinearGradient>
		);
	}
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: null,
};

export default HomeScreen;
