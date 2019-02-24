import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { crud } from "../actions/crud.js";
import styles from './stylesheet/counterDisp.scss';

import UserList from './UserList.js';

class CounterDisp extends Component {
	componentWillMount() {
		this.callPage();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.countProps != this.props.countProps) {
			this.props = nextProps;
			this.callPage();
		}
	}

	callPage() {
		const config = {
			method: 'GET',
			//url: 'https://reqres.in/api/users?page=' + this.props.countProps
			//url: '../data/algolia.json'
			url: 'https://hn.algolia.com/api/v1/search?query=&page=' +this.props.countProps
		};
		const { dispatch } = this.props;

		dispatch({ type: 'FETCH_USERS' });
		crud(config)
			.then(response => {
				dispatch({ type: 'FETCH_USERS_FULFILLED', payload: response.data.hits });
			})
			.catch((err) => {
				//console.log('callPage Error', err);
				dispatch({ type: 'FETCH_USERS_REJECTED', payload: err });
			})
	}


	render() {
		const app = {
			color: 'blue',
		};
		//this.callPage(this.props.dispatch);
		const { f } = this.props;
		const isEmpty = f.users.length === 0
		if(!isEmpty){
			var userNodes = f.users.map(function (user) {
				var dt2 = new Date(user.created_at);
				var dt1 = new Date();
				var diff =(dt2.getTime() - dt1.getTime()) / 1000;
				diff /= (60 * 60 * 24);

				user.years = Math.abs(Math.round(diff/365.25)) +' year(s) ago';
			})
		}
		console.log(isEmpty, f)
		return (
			<div>
				{isEmpty
					? (f.fetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
					: <div style={{ opacity: f.fetched ? 1 : 0.5 }}>
						<UserList users={f.users} />
					</div>
				}
			</div>
		);
	}
}

CounterDisp.propTypes = {
	countProps: PropTypes.number.isRequired,
	f: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
}

export default connect((store) => {
	return {
		countProps: store.countB.count,
		users: store.myUserList.users,
		f: store.myUserList
	};
})(CounterDisp);
