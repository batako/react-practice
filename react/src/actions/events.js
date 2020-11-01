import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const TOKEN = 'token123'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const default_params = {
  params: {
    token: TOKEN,
  },
}

const default_data = {
  token: TOKEN,
}

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`, default_params)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events`, Object.assign(default_data, values))
  dispatch({ type: READ_EVENTS, response })
}

export const putEvent = (id, values) => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${id}`, Object.assign(default_data, values))
  dispatch({ type: UPDATE_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}`, default_params)
  dispatch({ type: DELETE_EVENT, id })
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}`, default_params)
  dispatch({ type: READ_EVENT, response })
}
