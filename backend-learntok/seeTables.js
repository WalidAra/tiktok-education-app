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

// Function to select all rows and columns from a given table
const selectAllRowsAndColumns = (tableName) => `SELECT * FROM ${tableName}`;

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    // Get all table names
    return client.query(getAllTables());
  })
  .then((tablesResult) => {
    const tableNames = tablesResult.rows.map((row) => row.table_name);

    // For each table, select and log all rows and columns
    const promises = tableNames.map((tableName) => {
      return client.query(selectAllRowsAndColumns(tableName)).then((result) => {
        console.log(`All rows and columns from the ${tableName} table:`);
        console.table(result.rows);
      });
    });

    return Promise.all(promises);
  })
  .catch((err) => {
    console.error(
      "Error connecting to the database or retrieving tables:",
      err
    );
  })
  .finally(() => {
    client.end();
  });
