const connectToDatabase = require("../config/mongodb");
const { ObjectId } = require("mongodb");
const User = {
  getAllUsers: async () => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");
    try {
      const result = await usersCollection.find({}).toArray();
      return result;
    } catch (error) {
      console.log("error cant get users array", error);
      return error;
    }
  },

  getUserByID: async (id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");
    try {
      const user = await usersCollection.findOne({
        _id: new ObjectId(`${id}`),
      });
      return user;
    } catch (error) {
      return { status: error };
    }
  },

  Login: async (info) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");
    const { email, password } = info;
    try {
      const user = await usersCollection.findOne({
        email: email,
        password: password,
      });
      return user !== null ? { status: true, user } : { status: false };
    } catch (error) {
      return { status: false };
    }
  },

  SignUp: async (userInfo) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");

    try {
      await usersCollection.insertOne(userInfo);
      return { status: true, message: "User registered successfully" };
    } catch (error) {
      console.error("Error registering user:", error);
      return { status: false, message: "User registration failed" };
    }
  },

  updateUserState: async (id, user) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");

    try {
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(`${id}`) },
        { $set: user }
      );

      if (result.matchedCount > 0 && result.modifiedCount > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  DeleteUser: async (id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");

    try {
      const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
      if (result.matchedCount > 0 && result.modifiedCount > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  updatePfp: async (id, pfp) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");
    try {
      const result = await usersCollection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: { pfpUrl: pfp } }
      );
      if (result.matchedCount > 0 && result.modifiedCount > 0) {
        return true; // Successful update
      } else {
        return false; // No document found or no modifications made
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  SearchUsers: async (searchValue) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("learntok");
    const usersCollection = db.collection("users");

    const searchCriteria = {
      $or: [
        { userName: { $regex: searchValue, $options: "i" } },
        { fullName: { $regex: searchValue, $options: "i" } },
      ],
    };

    try {
      const result = await usersCollection.find(searchCriteria).toArray();
      return result;
    } catch (error) {
      console.error("interval error search users ( model ) ", error);
    }
  },

  // suggestedUsers: async (id) => {
  //   const mongoClient = await connectToDatabase();
  //   const db = mongoClient.db("learntok");
  //   const usersCollection = db.collection("users");
  //    try {
  //      await usersCollection.find({ _id: ObjectId(id.toString()) });
  //      return { status: true, message: "User registered successfully" };
  //    } catch (error) {
  //      console.error("Error registering user:", error);
  //      return { status: false, message: "User registration failed" };
  //    }
  // },
};

module.exports = User;
