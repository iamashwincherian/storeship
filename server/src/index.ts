import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT: string = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.send("Storeship API");
});

app.listen(PORT, () => console.log("Server has started on port", PORT));
