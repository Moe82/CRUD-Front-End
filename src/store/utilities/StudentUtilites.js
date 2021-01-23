import axios from 'axios';

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
    .get('/api/players')
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
