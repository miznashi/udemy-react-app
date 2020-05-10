import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'

//関数のインポート (acctions/index.js)
import { readEvents } from '../actions';

//class component
class EventIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return(
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})

//ショートハンド
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)