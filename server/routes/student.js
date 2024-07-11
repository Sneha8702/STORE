import express from "express";
import { Product } from "../models/Product.js";
const router = express.Router();
import { AdminRouter } from "./auth.js";
import { Student } from "../models/Student.js";

router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const { name, number , id,quantity, imgURL } = req.body;
    const username = "sneha@gmail.com";
    const newItem = {
      name: name,
      quantity: quantity,
      imgURL: imgURL,
      date: new Date(),
    };
    const student = await Student.findOne({ username });

    console.log(student);
    if (!student) {
      throw new Error("Student not found");
    }
    student.cart.push(newItem);

    // Save the updated student document
    await student.save();
    const product= await Product.findByIdAndUpdate(id,{number:number-quantity})
    await product.save()
    return res.json({ added: true });
  } catch (err) {
    return res.json({ message: "Error adding product" });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Student.find();
    return res.json(products[0].cart);
  } catch (err) {
    return res.json(err);
  }
});



export { router as studentRouter };
