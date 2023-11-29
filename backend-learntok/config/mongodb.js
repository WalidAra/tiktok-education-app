const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://arawalid90:gthp909walid@exoticcluster.mgel26i.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    return client;
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports =  connectToDatabase;
