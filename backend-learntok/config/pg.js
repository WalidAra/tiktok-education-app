const { Client } = require("pg");

const connectionString =
  "postgres://learntok_e5yp_user:b4zd4c7QREi7tMy1lj2N6vDUUxppnBGZ@dpg-clvhqkla73kc73bpv0ng-a/learntok_e5yp";

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

module.exports = client;
