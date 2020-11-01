import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const TOKEN = 'token123'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const default_get_data = {
  params: {
    token: TOKEN,
  },
}

const default_post_data = {
  token: TOKEN,
}


export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`, default_get_data)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events`, Object.assign(default_post_data, values))
  dispatch({ type: READ_EVENTS, response })
}
