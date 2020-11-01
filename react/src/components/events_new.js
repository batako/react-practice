import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions/events'

import Button from '@material-ui/core/Button'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.moveToRootPage = this.moveToRootPage.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: {touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={ label } type={ type } />
        { touched && error && <span>{ error }</span> }
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  moveToRootPage() {
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    console.log('submitting', submitting)

    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
        <div><Field label="Body" name="body" type="text" component={ this.renderField } /></div>

        <div>
          {/* <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } /> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={ pristine || submitting || invalid }
          >保存</Button>

          {/* <Link to="/">Cancel</Link> */}
          <Button
            // href="/" // react-router-dom を使わず遷移する場合
            variant="contained"
            onClick={ this.moveToRootPage }
          >キャンセル</Button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({
    validate,
    form: 'eventNewForm',
  })(EventsNew)
)
