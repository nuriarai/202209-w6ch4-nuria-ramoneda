import { Request, Response } from "express";
import things from "../data/things.js";

const getAllThings = (req: Request, res: Response) => {
  res.status(200).json(things);
};

export default getAllThings;
