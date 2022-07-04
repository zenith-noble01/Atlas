import axios from "axios";

const AUTH__URL = "https://ticorg.herokuapp.com/api/auth/register";

const registerStudent = async (studentData) => {
  const response = await axios.post(AUTH__URL, studentData);

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
};

export default authServices;
