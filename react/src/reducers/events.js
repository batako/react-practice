import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions/events'

const events = (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }

    case READ_EVENTS:
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')

    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }

    default:
      return events
  }
}

export default events
