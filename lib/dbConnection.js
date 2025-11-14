import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://mayarabdelbasser539_db_user:docsaad@cluster0.xq5rxki.mongodb.net/NextJS"
    );
    console.log("⭐⭐  Connected successfully");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
