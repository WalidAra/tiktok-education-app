const { Client } = require("pg");

const connectionString =
  "postgres://exotic:mQ2z4xD33VQX0U3j84qEuiWWm9JWebEB@dpg-cl6jk992ijic73a2cheg-a.frankfurt-postgres.render.com/learntok_bmd7";

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to get all table names
const getAllTables = () =>
  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'";

// Function to get all columns of a table
const getAllColumns = (tableName) =>
  `SELECT column_name FROM information_schema.columns WHERE table_name = '${tableName}'`;

// Function to delete all rows in the comments table
const deleteAllRowsInCommentsTable = () => "DELETE FROM comments";

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    // Delete all rows in the comments table
    return client.query(deleteAllRowsInCommentsTable());
  })
  .then(() => {
    console.log(
      "All rows in the 'comments' table have been deleted successfully."
    );
  })
  .catch((err) => {
    console.error("Error deleting rows in the 'comments' table:", err);
  })
  .finally(() => {
    client.end();
  });
