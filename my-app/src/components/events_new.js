// events_index をコピーしたファイル
// ※必要じゃないものはコメントアウトしている

import React, {Component} from 'react';
import {connect} from 'react-redux';
// import _ from 'lodash'
import { Link } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

//関数のインポート (acctions/index.js)
// import { readEvents } from '../actions';
import { postEvent } from '../actions';

//class component
class EventNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field){
    const { input, label, type, meta: {touched, error} } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit } = this.props
    
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

// const mapStateToProps = state => ({events: state.events})

//ショートハンド
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventNew)
)