import axios from "axios";

// local backend server port number
const PORT = 8085;

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT"

// ACTION CREATORS;
const fetchAllStudentsActionCreator = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students.students,
  };
};

const addStudentActionCreator = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const deleteStudentActionCreator = (studentID) => {
  return {
    type: DELETE_STUDENT,
    payload: studentID,
  };
};



// THUNK CREATORS;
export const fetchAllStudents = () => (dispatch) => {
  console.log("fetching...")
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
      email: student.studentEmail,
      gpa: student.studentGpa,
      img: ""
    })
    .then((response) => {
      dispatch(addStudentActionCreator(response.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const deleteStudent = (studentID) => (dispatch) => {
  console.log(studentID)
  return axios.delete(`http://localhost:${PORT}/api/students`, {
      data: {
        id: studentID,
      },
    })
    .then(() => {
      dispatch(deleteStudentActionCreator(studentID));
    }).catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_STUDENT:
      let newState = state.filter((student) => student.id != action.payload);
      return newState
    default:
      return state;
  }
};

export default reducer;
