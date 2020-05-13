import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

// material ui table component import
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

//関数のインポート (acctions/index.js)
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
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />

    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    // pristine  submitボタンを非活性状態にする
    // submiting  submitボタン二重を防止する
    const { handleSubmit, pristine, submiting, invalid } = this.props
    const style = { margin: 12 }
    
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submiting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
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