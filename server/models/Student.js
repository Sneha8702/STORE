import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      imgURL: { type: String, required: true },
      date: { type: Date, required: true },
    },
  ],
});
const studentModel = mongoose.model("Student", studentSchema);
export { studentModel as Student };
