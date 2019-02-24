import React from "react";
import ReactDOM from "react-dom";
import * as counterCreator from '../actions/counterAction';

import styles from './stylesheet/counterDisp.scss';

export default class User extends React.Component{
  hideRow(){
    dispatch({ type: 'HIDE_ROW', payload: this.props.userProps });
  }
  render(){
    let user = this.props.userProps;
    return (
      <div>

        <div>
          <div className={styles.comment}>{user.num_comments}</div>
          <div className={styles.title}>{user.title}</div>
          <div className={styles.url}>{user.url}</div>
          <div className={styles.points}>{user.points}</div>
          <div className={styles.author}>{user.author}</div>
          <div className={styles.create}>{user.years}</div>
          <div className={styles.create}  onClick={() => { hideRow(user); }}>[hide]</div>
        </div>
        {/*<img src={this.props.avatar} className="avatar"/>
        <div className="username">
          {this.props.firstname} {this.props.lastname}
        </div>*/}
      </div>
    )
  }
}
