import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<div className='row'>
				<div className='col col-8'>
					<input
						className='form-control'
						value={props.value}
						onChange={(event) => props.setSearchValue(event.target.value)}
						placeholder='Buscar'
					></input>
				</div>
				<div className='col col-4'>
					<FontAwesomeIcon icon={ faSearch }  size={ 32 } color='#f5d5e0'/>
				</div>			
			</div>
		</div>
	);
};

export default SearchBox;
