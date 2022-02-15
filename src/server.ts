import "dotenv/config";
import "reflect-metadata";
import express from "express";
import "./database";
const app = express();

app.listen(process.env.PORT || 4000, () =>
    console.log(`Server is running ${process.env.PORT || 4000}`)
);