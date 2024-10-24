import { Request, Response } from "express";
import student from "../model/students";

interface details {
  name: string;
  place: string;
  standard: number;
  medium: string;
}

export class controller {
  async getHome(req: Request, res: Response): Promise<void> {
    res.render("index", { data: false });
  }

  async getAllStudents(req: Request, res: Response): Promise<void> {
    try {
      let allStudents = await student.find({}).sort({ _id: -1 });

      let data = true;
      res.render("index", { data, allStudents });
    } catch (err) {
      console.log("To get all studetns:", err);
    }
  }

  async addStudent(req: Request, res: Response): Promise<void> {
    try {
      let { name, place, standard, medium }: details = req.body;

      let newUser = new student({
        name: name,
        place: place,
        standard: standard,
        medium: medium,
      });

      let newstd = await newUser.save();
      res.redirect("/");
    } catch (err) {
      console.log("Adding new studetn:", err);
    }
  }

  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      let id = req.query.id;
      let deletedData = await student.deleteOne({ _id: id });

      res.render("index", { data: false });
    } catch (err) {
      console.log("delete student:", err);
    }
  }

  async getUpdateFile(req: Request, res: Response): Promise<void> {
    try {
      let id = req.query.id;
      let studentToUpdate = await student.findOne({ _id: id });

      res.render("update", { studentToUpdate });
    } catch (err) {
      console.log("get Update function:", err);
    }
  }

  async makeUpdate(req: Request, res: Response): Promise<void> {
    try {
      let { name, place, standard, medium, id } = req.body;

      await student.updateOne(
        { _id: id },
        {
          $set: {
            name: name,
            place: place,
            standard: standard,
            medium: medium,
          },
        }
      );

      res.redirect("/");
    } catch (err) {
      console.log("make updation:", err);
    }
  }
}
