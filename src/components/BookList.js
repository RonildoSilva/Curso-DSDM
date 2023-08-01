import React from 'react';
import AddFavourite from './AddFavourites';
const BookList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	{/* percurso */}
	return (
		<>
			{props.books.map((book, index) => (
				
			<div class="row border-bottom">
				<div class="col-5 align-img">
					<img src={'https://picsum.photos/200/300?random='+book.objectID} />
				</div>
				<div  class="col-7">                            
					<h3 className='light-color'>{book.author}</h3>
					<p className='light-color'>{book.title}</p>
				</div>

				<div class="col-12" className='overlay d-flex align-items-center justify-content-center'>

					{/* rating */}
					<AddFavourite onClick={() => props.handleFavouritesClick(book)} />
				</div>
			</div>

				
			))}
		</>
	);
};

export default BookList;
