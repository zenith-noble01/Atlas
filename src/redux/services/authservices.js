import axios from "axios";
import { auth } from "../../api/endpoints";

const registerStudent = async (studentData) => {
  const response = await axios.post(auth + "register", studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

const loginStudent = async (userData) => {
  const response = await axios.post(auth + "login", userData);

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
