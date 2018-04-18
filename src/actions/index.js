export function selectBook(book) {
	// actions need to return an object with a type property
	return {

		type: 'BOOK_SELECTED',
		payload: book

	};

}