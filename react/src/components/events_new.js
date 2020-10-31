import { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// import { postEvent } from '../actions/events'

class EventsNew extends Component {
  render() {
    return (
      <Fragment>
        <div>foo</div>
      </Fragment>
    );
  }
}

// const mapDispatchToProps = ({ postEvnet })

// export default connect(nul, mapDispatchToProps)(EventsIndex)
export default connect(null, null)(EventsNew)
