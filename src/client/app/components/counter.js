// React component
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterCreator from '../actions/counterAction';

import styles from './stylesheet/counterDisp.scss';

class Counter extends Component {
  render() {
    console.log(this.props)
    const { count, prevCount, nextCount } = this.props
    return (
      <div>
        {/*<div>{count}</div>
         <button onClick= {() => {
                this.props.changeCount();
            }}>
            Increase OLD
        </button>
        <button onClick={this.props.changeCount}>Inc</button>
        <button onClick={() => { this.props.prevCount(); }}> prev </button>
        <button onClick={() => { prevCount() }}> prev </button>
        <button onClick={() => { nextCount(); }}> Next </button>*/}
        <div className={styles.more}  onClick={() => { nextCount(); }}>More</div>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired
}

function mapStateToProps(store) {
  return { count: store.countB.count }
}

export default connect(
  mapStateToProps,
  counterCreator
)(Counter);