import express from "express";
import pg from "pg";
import Joi from "joi";

const app = express();
const port = 3000;
const pool = pg

const { Pool } = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mahasiswa",
    password: "Dd211103",
    port: 5432,
})