import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

import User from './User.js';
import * as counterCreator from '../actions/counterAction';

import styles from './stylesheet/counterDisp.scss';

class UserList extends React.Component {
 
  render() {
    const { hideRow, upPoint } = this.props
    console.log(this.props)
    if (Object.getOwnPropertyNames(this.props.users).length === 0) {
      return (<div>Data not available and is empty</div>)
    }
    var userNodes = this.props.users.map(function (user, i) {
      /*console.log(user.num_comments, user.title,user.url, user.points, user.author, user.created_at)*/
        /*return (
          <User userProps={user} key={user.objectID}>
          </User>        
        )*/
        {/*<div key={user.objectID} style={{backgroundColor: '#a9a9a9'}}>*/}
        //console.log(user)
        var alternatingColor = i%2 == 0 ? '#a9a9a9' : '#d5d5d5';
        return (
          <div key={user.objectID} style={{backgroundColor: alternatingColor}}>
            <div className={styles.comment}>{user.num_comments}</div>
            <div className={styles.points}>{user.points}<span  onClick={() => { upPoint(user); }}> &uarr;</span></div>
            <div className={styles.title}>{user.title}</div>
            <div className={styles.textSm}><a href ={user.url} target="_blank">({user.url})</a></div>
            <div className={styles.textSm}>by {user.author}</div>
            <div className={styles.textSm}>{user.years}</div>
            <div className={styles.text_hide}  onClick={() => { hideRow(user); }}>[hide]</div>
          </div>
        )
    });

    return (
      <div>
        <div className={styles.component_header}>
          <div className={styles.component_top}>Top</div>
          <div className={styles.component_new}>| Now</div>
        </div>
        {userNodes}
      </div>
    )
  }
}


function mapStateToProps(store) {
  return { count: store.countB.count }
}

export default connect(
  mapStateToProps,
  counterCreator
)(UserList);