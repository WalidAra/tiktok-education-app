const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://arawalid90:gthp909walid@exoticcluster.8pdxbrd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
module.exports = connectToDatabase;
