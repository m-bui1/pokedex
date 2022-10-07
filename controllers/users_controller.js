const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// models
const User = require("../models/user");

// routes

router.get('/fav1/:email', (req, res) => {
  let email = req.params.email
  User
    .findOne(email)
    .then(favPoke => res.json(favPoke))
})

router.post("/add_fav", (req, res) => {
  const {
    favourite,
    email
  } = req.body;
  console.log(req.body);

  User.update(
    email,
    favourite
  );
  // .then((res) => res.json({ message: "edited successfully" }));
});
router.post("/", (req, res) => {
  const { name, email, password, avatar } = req.body;
  const {
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    favourite,
    trainerID,
  } = "";

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10),
    null
  );

  User.create(
    name,
    email,
    passwordDigest,
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    avatar,
    trainerID
  ).then((userName) => res.json(userName));

  User.createFav(
    email,
    favourite
  );
});

// router.post('/:email'), (req, res) => {
//   const {email} = req.state.loggedInUserName
//   const {favourite} = "";
//   User.createFav(
//     email,
//     favourite
//   )
// }

router.delete('/:id', (req,res) => {
  const favPoke = req.params.favPoke

  User
    .delete(favPoke)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router;
