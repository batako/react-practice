import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions/events'

import Button from '@material-ui/core/Button'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

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
      <TableRow key={ event.id }>
        <TableCell>{ event.id }</TableCell>
        <TableCell>
          <Link to={ `/events/${event.id}` }>
            { event.title }
          </Link>
        </TableCell>
        <TableCell>{ event.body }</TableCell>
      </TableRow>
    ))
  }

  moveToEventNewPage() {
    this.props.history.push('/events/new')
  }

  render() {
    return (
      <Fragment>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TITLE</TableCell>
                <TableCell>BODY</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              { this.renderEvents() }
            </TableBody>
          </Table>
        </TableContainer>

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
