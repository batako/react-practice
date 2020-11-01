import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions/events'

import Button from '@material-ui/core/Button'

class EventsIndex extends Component {
  constructor(props) {
    super(props)
    this.moveToEventNewPage = this.moveToEventNewPage.bind(this)
  }

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>
          <Link to={ `/events/${event.id}` }>
            { event.title }
          </Link>
        </td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  moveToEventNewPage() {
    this.props.history.push('/events/new')
  }

  render() {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>

          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>

        {/* <Link to="/events/new">New Event</Link> */}
        <Button
          variant="contained"
          color="primary"
          onClick={ this.moveToEventNewPage }
        >New Event</Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
