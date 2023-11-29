const { MongoClient } = require("mongodb");
const { Client } = require("pg");

// Function to get all table names
const getAllTables = () =>
  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'";

// Function to select all rows from a given table
const selectAllRows = (tableName) => `SELECT * FROM ${tableName}`;

// MongoDB connection
const mongoUri =
  "mongodb+srv://arawalid90:gthp909walid@exoticcluster.mgel26i.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDatabase() {
  try {
    await mongoClient.connect();
    const collection = await mongoClient.db().collection("users");
    const users = await collection.find().toArray();
    console.log("All rows from the users collection:", users);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  } finally {
    await mongoClient.close();
  }
}

// PostgreSQL connection
const postgresConnectionString =
  "postgres://exotic:mQ2z4xD33VQX0U3j84qEuiWWm9JWebEB@dpg-cl6jk992ijic73a2cheg-a.frankfurt-postgres.render.com/learntok_bmd7";

const postgresClient = new Client({
  connectionString: postgresConnectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function connectToPostgresDatabase() {
  try {
    await postgresClient.connect();
    const tablesResult = await postgresClient.query(getAllTables());
    const tableNames = tablesResult.rows.map((row) => row.table_name);

    // For each table, select and log all rows
    const promises = tableNames.map((tableName) => {
      return postgresClient.query(selectAllRows(tableName)).then((result) => {
        console.log(`All rows from the ${tableName} table:`, result.rows);
      });
    });

    await Promise.all(promises);
  } catch (error) {
    console.error(
      "Error connecting to PostgreSQL or retrieving tables:",
      error
    );
    throw error;
  } finally {
    await postgresClient.end();
  }
}

// Call the functions
connectToMongoDatabase();
connectToPostgresDatabase();
