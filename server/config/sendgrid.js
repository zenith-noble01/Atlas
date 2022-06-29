const sendGrid = require("@sendgrid/mail");

const SG__API_KEY = process.env.SENDGRID_API_KEY;

sendGrid.setApiKey(SG__API_KEY);

module.exports = sendGrid;
