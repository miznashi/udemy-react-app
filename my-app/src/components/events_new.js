// events_index をコピーしたファイル
// ※必要じゃないものはコメントアウトしている

import React, {Component} from 'react';
import {connect} from 'react-redux';
// import _ from 'lodash'
import { Link } from 'react-router-dom'

//関数のインポート (acctions/index.js)
// import { readEvents } from '../actions';
// import { postEvent } from '../actions';

//class component
class EventNew extends Component {
  render(){
    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({events: state.events})

//ショートハンド
// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventNew)