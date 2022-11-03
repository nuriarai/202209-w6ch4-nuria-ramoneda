import express, { Request, Response } from "express";
import things from "../data/things.js";

const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const thing = things.find((thing) => thing.id === +id);
  if (!thing) {
    res.status(404).json({ error: "Thing not found" });
    return;
  }
  res.status(200).json({ thing });
};

export default getThingById;
