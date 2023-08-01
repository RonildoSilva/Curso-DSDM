import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { StyleSheet } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'


import BookList from './components/BookList';
import RatedBooks from './components/RatedBooks';

import Header from './components/Header';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [books, setBooks] = useState([]);
	const [favoritos, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getAPIRequest = async (searchValue) => {
    	const url = `https://hn.algolia.com/api/v1/search?query=${searchValue}`;
		const response = await fetch(url);
		const responseJson = await response.json();

    console.log('responseJson');
    //console.log(responseJson['hits']);
    console.log(responseJson);

		if (responseJson.hits) {
			setBooks(responseJson.hits);
		}
	};

	useEffect(() => {
		getAPIRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const favouriteBooks = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (favouriteBooks) {
			setFavourites(favouriteBooks);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (book) => {
		book.rate = 5;
		const newFavouriteList = [...favoritos, book];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteBook = (book) => {
		const newFavouriteList = favoritos.filter(
			(favourite) => favourite.objectID !== book.objectID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid' style={styles.container} >
			<div className="row">
				<div className="col-2">
					<FontAwesomeIcon icon={ faBook }  size={ 32 } color={'#f5d5e0'}/>
				</div>
				<div className="col-4">
					<Header heading='Meus Livros' />
				</div>
				<div className="col-6">
					<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
			</div>
			
             
			<div class="row size-panel">
				<BookList
					books={books}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>


			<div className='row d-flex align-items-center mt-4 mb-4'>
				<Header heading='Favoritos' />
			</div>
			<div className='row'>
				<RatedBooks
					books={favoritos}
					handleFavouritesClick={removeFavouriteBook}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
			{/**/}
		</div>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#210535',
	  padding: 10,
	  justifyContent: 'center',
	  textAlign: 'center',
	}
  });