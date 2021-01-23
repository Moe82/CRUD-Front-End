import axios from 'axios';

// DB port number
const PORT = 8082

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES"
const DELETE_CAMPUS = "DELETE_CAMPUS"
const ADD_CAMPUS = "ADD_CAMPUS"
const UPDATE_CAMPUS = "UPDATE_CAMPUS"

// ACTION CREATORS;
const fetchAllCampusesActionCreator = campuses => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses.campuses
  }
}

const deleteCampusActionCreator = campusID => {
  return {
    type: DELETE_CAMPUS,
    payload: campusID
  }
}

const addCampusActionCreator = campus => {
  console.log("HERE", campus)
  return {
    type: ADD_CAMPUS,
    payload: campus
  }
}

const updateCampusActionCreator = campus => {
  console.log("HERE", campus)
  return {
    type: UPDATE_CAMPUS,
    payload: campus
  }
}


// THUNK CREATORS;
export const fetchAllCampuses = () => dispatch => {
  return axios.get(`http://localhost:${PORT}/api/campuses`)
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCampusesActionCreator(campuses)))
    .catch(err => console.log(err))
}

export const deleteCampus = (campusID) => dispatch => {
  return axios.delete(`http://localhost:${PORT}/api/campuses`, {
    data: {
      id: campusID
    }
  }).then( () => {
    dispatch(deleteCampusActionCreator(campusID))
  })
}

export const addCampus = (campus) => dispatch => {
  axios.post(`http://localhost:${PORT}/api/campuses`, {
      name: campus.campusName,
      address: campus.campusAddress
    }).then(response => {
      dispatch(addCampusActionCreator(response.data))
    })
}

export const updateCampus = (campus) => dispatch => {
  console.log(campus)
  return axios.put(`http://localhost:${PORT}/api/campuses`, {campus})
  .then(response => {
      dispatch(updateCampusActionCreator(response.data))
  })
  .catch(error => console.error(error))
}

const reducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload
    case DELETE_CAMPUS:
      let newState = state.filter(campus => campus.id != action.payload)
      return newState
    case ADD_CAMPUS:
      return [...state, action.payload]
    case UPDATE_CAMPUS:
      return action.payload
    default:
      return state;
  }
}

export default reducer;