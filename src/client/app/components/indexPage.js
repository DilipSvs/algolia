import React, { Component } from 'react'

import Counter from './counter'
import CounterDisp from './counterDisp'
import styles from './stylesheet/indexPage.scss'

export default class IndexPage extends Component {
	render() {
		//const styles = require('./stylesheet/indexPage.scss');

		return (
			<div className={styles.app}>
				<div className={styles.contentWrapper}>
					<CounterDisp />
					<Counter />
				</div>
			</div>
		)
	}
}