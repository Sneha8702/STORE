import express from "express";
import bcrypt from "bcrypt";
import { Student } from "./models/Student.js";
import "./db.js";

async function StudentAccount() {
  try {
    const adminCount = await Student.countDocuments();
    if (adminCount === 0) {
      const hasPassword = await bcrypt.hash("1234",10);
      const newAdmin = new Student({
        username: "sneha@gmail.com",
        password: hasPassword
      });
      await newAdmin.save();
      console.log("account created");
    } else {
      console.log("account already existed");
    }
  } catch (err) {
    console.log("error");
  }
}

StudentAccount();
