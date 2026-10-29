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

app.use((req, res, next) => {
    const start = Date.now()

    res.on("finish", () => {
        const duration = Date.now() - start

        console.log(`
            method:req.method
            url:req.OriginalUrl
            status: res.statusCode 
            duration: ${duration}ms,)
        })
    })
    

        next()
})


function successResponse(res, message, data, status = 200) {
return res.status(status).json({
    status: "success",
    message,
    data,
    eror: null,
})


            