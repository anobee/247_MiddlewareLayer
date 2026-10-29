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
}

function erorResponse(res, message, status, details = null) {
    return res.status(status).json({
    success: false,
    message,
    data: null,
    eror: details,
    })
}

const biodataSchema = Joi.object({
            id: Joi.number().integer().positive(),
            nama: Joi.string().trim().min(2).max(100).required(),
            nim: Joi.string().trim().length(20).required(),
            kelas: Joi.string().trim().min(1).max(10).required(),
        })

const idSchema = Joi.object({
            id: Joi.number().integer().positive().required(),
        })


            