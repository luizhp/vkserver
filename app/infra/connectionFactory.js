const { Sequelize, Model, DataTypes } = require('sequelize');

const database = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  // host: ':memory:'
  host: './songs.sqlite'
});

module.exports = { database, Model, DataTypes };
