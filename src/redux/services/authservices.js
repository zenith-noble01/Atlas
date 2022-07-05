import axios from "axios";

const AUTH__URL = "https://ticorg.herokuapp.com/api/auth/";

const registerStudent = async (studentData) => {
  const response = await axios.post(AUTH__URL + "register", studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

const loginStudent = async (userData) => {
  const response = await axios.post(AUTH__URL + "login", userData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

const logoutStudent = async () => {
  localStorage.removeItem("student");
};

const authServices = {
  registerStudent,
  logoutStudent,
  loginStudent,
};

export default authServices;
