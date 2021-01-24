import axios from 'axios';

// local backend server port number
const PORT = 8085

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";

// ACTION CREATORS;
const fetchAllStudentsActionCreator = student => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: student
  }
}

// THUNK CREATORS;
export const fetchAllStudents = () => dispatch => {
  return axios
    .get(`http://localhost:${PORT}/api/students`)
    .then(res => res.data)
    .then(students => dispatch(fetchAllStudentsActionCreator(students)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
