import axios from "axios";

const db_server = "http://ttp-crud-app-backend.herokuapp.com"

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT"
const UPDATE_STUDENT = "UPDATE_STUDENT"

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
const updateStudentActionCreator = (student) => {
  console.log("*****", student)  
  return {
    type: UPDATE_STUDENT,
    payload: student,
  };
}



// THUNK CREATORS;
export const fetchAllStudents = () => (dispatch) => {
  console.log("fetching...")
  return axios
    .get(`${db_server}/api/students`)
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudentsActionCreator(students)))
    .catch((err) => console.log(err));
};

export const addStudent = (student) => (dispatch) => {
  axios.post(`${db_server}/api/students`, {
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
  return axios.delete(`${db_server}/api/students`, {
      data: {
        id: studentID,
      },
    })
    .then(() => {
      dispatch(deleteStudentActionCreator(studentID));
    }).catch((err) => console.log(err));
};

export const updateStudent = (student) => (dispatch) => {
  console.log("__________", student)
  return axios
    .put(`${db_server}/api/students`, { student })
    .then((response) => {
      dispatch(updateStudentActionCreator(response.data));
    })
    .catch((error) => console.error(error));
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
