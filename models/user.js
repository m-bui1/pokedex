const db = require("../db/db");

const User = {
  findOne: (email) => {
    const sql = 'SELECT favourite FROM favourites WHERE email = $1'
    return db
      .query(sql, [email])
      .then(dbRes => dbRes.rows)
  },
  create: (
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
  ) => {
    const sql = `
      INSERT INTO users(name, email, password_digest, favourite1, favourite2, favourite3, favourite4, favourite5, favourite6, avatar, trainerID)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;

    return db
      .query(sql, [
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
        trainerID,
      ])
      .then((dbRes) => dbRes.rows[0].email);
  },

  createFav: (
    email,
    favourite
  ) => {
    const sql = `
    INSERT INTO favourites(email, favourite)
    VALUES ($1, $2)
    RETURNING *
    `;

    return db
    .query(sql, [
      email,
      favourite
    ])
    .then((dbRes) => dbRes.rows[0].email)
  },

  findByEmail: (email) => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `;

    return db.query(sql, [email]).then((dbRes) => dbRes.rows[0]);
  },

  findById: (id) => {
    const sql = `
      SELECT * FROM users
      WHERE id = $1
    `;

    return db.query(sql, [id]).then((dbRes) => dbRes.rows[0].email);
  },

  update: (
    email,
    favourite
  ) => {
    const sql = `
    UPDATE favourites SET favourite = $2 WHERE email = $1
    `;
    return db
      .query(sql, [
        email,
        favourite
      ])
      .then((dbRes) => dbRes.rows[0]);
  },
  delete: email => {
    const sql = `
    DELETE FROM favourites WHERE email = $1 
    INSERT INTO favourites(email, favourite)
    VALUES ($1, $2)
    RETURNING *
    `
    return db.query(sql, [email])
  }
};

module.exports = User;
