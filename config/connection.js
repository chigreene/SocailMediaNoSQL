const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkDB");

module.exports = connection;
