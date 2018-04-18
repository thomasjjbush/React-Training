import React, { Component } from 'react';
import { connect } from 'react-redux';
// action imports below
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //required with all redux actions

class BookList extends Component {

	renderList() {
		
		return this.props.books.map((book) => {

			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);

		});

	}

	render() {

		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)

	}

}

function mapStateToProps(state) {

	// whatever is returned will be available as "this.props" inside of bookList
	return {

		books: state.books

	};

}

// Anything returned from this function will end up as props on the bookList container
function mapDispatchToProps(dispatch) {
	//  Whenever selectBook (action) is called - result needs to be dispatched to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote bookList from a component to a container
// It needs to know about the dispatch method - to make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);