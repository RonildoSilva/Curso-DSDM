import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


const AddFavourite = () => {
	const [defaultRating, setDefaultRating] = useState(3);
	const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
	

	const CustomRatingBar = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	
	  return (
		<View style={styles.customRatingBarStyle}>
		  {maxRating.map((item, key) => {
			return (
			  <TouchableOpacity
				activeOpacity={0.7}
				key={item}
				onPress={() => setDefaultRating(item)}>
				<View>
					{item <= defaultRating
					  ? <FontAwesomeIcon icon={ faStar } color={ '#f5d5e0' } size={ 32 }
					  transform={{ rotate: 42 }} onPress={() => console.log(props.books)} />
					  : <FontAwesomeIcon icon={ faStar } color={ '#430d4b' } size={ 32 } 
					  onPress={() => console.log(props.books)} />}
				</View>

			  </TouchableOpacity>
			);
		  })}
		</View>
	  );
	};
  
	return (
	  <SafeAreaView style={styles.container}>
		<View style={styles.container}>
		  {}
		  <CustomRatingBar />
		  <Text style={styles.textStyle}>
			{}
			{defaultRating} / {Math.max.apply(null, maxRating)}
		  </Text>
		</View>
	  </SafeAreaView>
	);
  };

export default AddFavourite;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#210535',
	  padding: 10,
	  justifyContent: 'center',
	  textAlign: 'center',
	},
	buttonStyle: {
	  justifyContent: 'center',
	  flexDirection: 'row',
	  marginTop: 30,
	  padding: 15,
	  backgroundColor: '#8ad24e',
	},
	buttonTextStyle: {
	  color: '#fff',
	  textAlign: 'center',
	},
	customRatingBarStyle: {
	  justifyContent: 'center',
	  flexDirection: 'row',
	  marginTop: 30,
	},
	starImageStyle: {
	  width: 40,
	  height: 40,
	  resizeMode: 'cover',
	},
  });