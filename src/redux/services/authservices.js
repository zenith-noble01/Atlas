import axios from "axios";

const AUTH__URL = "/auth/register";

const registerStudent = async (studentData) => {
  const response = await axios.post(AUTH__URL, studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

const authServices = {
  registerStudent,
};

export default authServices;
