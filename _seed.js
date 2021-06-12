// SEEDING PROCESS FOR NEW DEVELOPERS
const { hashSync } = require("bcryptjs");
const Users = require("./models/Users");

const seedUser = {
  username: "ADMIN",
  icon: "/assets/img/favicon.png",
  password: hashSync("password", 13),
};

new Users(seedUser)
  .save()
  .then((user) =>
    console.log(
      `User has been seeded:\nUser '${user.username}'\nPassword: "password"`
    )
  );
