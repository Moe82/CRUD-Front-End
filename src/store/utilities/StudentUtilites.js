import axios from "axios";

// local backend server port number
const PORT = 8086;

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATORS;
const fetchAllStudentsActionCreator = (student) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: student,
  };
};

const addStudentActionCreator = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};



// THUNK CREATORS;
export const fetchAllStudents = () => (dispatch) => {
  return axios
    .get(`http://localhost:${PORT}/api/students`)
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudentsActionCreator(students)))
    .catch((err) => console.log(err));
};

export const addStudent = (student) => (dispatch) => {
  axios.post(`http://localhost:${PORT}/api/students`, {
      firstName: student.studentFirstName,
      lastName: student.studentLastName,
      gpa: 3.0,
      email: "asd"
    })
    .then((response) => {
      dispatch(addStudentActionCreator(response.data));
    }).catch((err) => {
      console.log(err);
    });
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
