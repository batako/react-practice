import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions/events'

import Button from '@material-ui/core/Button'
class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.moveToRootPage = this.moveToRootPage.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
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
    const { id } = this.props.match.params
    await this.props.putEvent(id, values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  moveToRootPage() {
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

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

          {/* <Link to="/" onClick={ this.onDeleteClick }>Delete</Link> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={ this.onDeleteClick }
          >削除</Button>
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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}
const mapDispatchToProps = ({ getEvent, deleteEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    validate,
    form: 'eventShowForm',
    enableReinitialize: true,
  })(EventsShow)
)
