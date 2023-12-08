const { Client } = require("pg");

const connectionString =
  "postgres://exotic:mQ2z4xD33VQX0U3j84qEuiWWm9JWebEB@dpg-cl6jk992ijic73a2cheg-a/learntok_bmd7";

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect(); 

module.exports = client;
