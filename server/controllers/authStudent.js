const Student = require("../models/Student");
const sendGrid = require("../config/sendgrid");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

module.exports.createStudent = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "This fields are required",
    });
  }
  const oldStudent = await Student.findOne({ email });
  if (oldStudent)
    return res.status(400).json({
      message: "Student already exist with this email",
    });
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  const user = new Student({
    username,
    email,
    password: hashPass,
    isVerified: false,
    emailToken: crypto.randomBytes(64).toString("hex"),
  });

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: "Error while creating user",
      });
    }
    sendGrid.send({
      to: user.email,
      from: {
        name: "Atlas",
        email: process.env.SENDER__EMAIL,
      },
      subject: "Verify your email",
      html: `<h1>Verify your email</h1>
      <p>Please click on the link to verify your email</p>
      <a href="http://${req.headers.host}/api/auth/verify/${user.emailToken}">Verify Email</a>`,
    });
    res.status(200).json(user);
  });
};

//veryfying the student email
module.exports.verifyStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findOne({ emailToken: id });
  if (!student) {
    return res.status(400).json({
      message: "Student not found",
    });
  }
  student.isVerified = true;
  student.emailToken = "";
  student.save();
  // res.status(200).json({
  //   message: "Student verified successfully",
  // });
  res.redirect("https://atlas-v2.vercel.app/login");
};

//login user
module.exports.loginStudent = async (req, res) => {
  try {
    //checking if the user send the email and password to the server
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all the required fields",
      });
    }

    //checking if the user with the email exist in the database
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        message: "Student not found",
      });
    }

    //checking if the user password matches with the sent password
    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) return res.status(400).json("wrong password");

    // checking if the user verified the email.
    if (!student.isVerified) {
      return res.status(400).json({
        message: "Please verify your email",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
