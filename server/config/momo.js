const momo = require("mtn-momo");

const { Collections } = momo.create({
  callbackHost: process.env.CALLBACK_HOST,
});

const collections = Collections({
  userSecret: process.env.COLLECTIONS_USER_SECRET,
  userId: process.env.COLLECTIONS_USER_ID,
  primaryKey: process.env.COLLECTIONS_PRIMARY_KEY,
});
