import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const DELETE_CAMPUS = "DELETE_CAMPUS"
const ADD_CAMPUS = "ADD_CAMPUS"

// ACTION CREATORS;
const fetchAllCampusesActionCreater = campuses => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses.campuses
  }
}

const deleteCampusActionCreater = campusID => {
  return {
    type: DELETE_CAMPUS,
    payload: campusID
  }
}

const addCampusActionCreater = campus => {
  console.log("HERE", campus)
  return {
    type: ADD_CAMPUS,
    payload: campus
  }
}

// THUNK CREATORS;
export const fetchAllCampusesThunk = () => dispatch => {
  return axios.get('http://localhost:8081/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCampusesActionCreater(campuses)))
    .catch(err => console.log(err))
}

export const deleteCampus = (campusID) => dispatch => {
  return axios.delete('http://localhost:8081/api/campuses', {
    data: {
      id: campusID
    }
  }).then( () => {
    dispatch(deleteCampusActionCreater(campusID))
  })
}

export const addCampus = (campus) => dispatch => {
  axios.post('http://localhost:8081/api/campuses', {
      name: campus.campusName,
      address: campus.campusAddress
    }).then(res => {
      dispatch(addCampusActionCreater(res.data))
    })
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
    default:
      return state;
  }
}

export default reducer;
