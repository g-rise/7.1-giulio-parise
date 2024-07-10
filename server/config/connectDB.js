import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connexió efectuada amb la base de dades");
  } catch (error) {
    console.log("No s'ha pogut connectar a la base de dades", error);
  }
}

export default connectDB;
