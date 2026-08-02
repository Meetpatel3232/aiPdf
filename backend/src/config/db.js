const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Atlas Connected");
    console.log("Database:", mongoose.connection.db.databaseName);
    console.log("Host:", mongoose.connection.host);

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    console.log(
      "Collections:",
      collections.map((c) => c.name)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;