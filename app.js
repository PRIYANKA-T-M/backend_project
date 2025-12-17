//routes
//controller
//services
//models
//congig
//middlewares
//utils
const express=require('express')
const port=process.env.PORT
const app=express()
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const productRoutes = require("./src/routes/products.route");
const userRoutes = require("./src/routes/users.route");
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 55 }));
app.use(productRoutes);
app.use(userRoutes);

module.exports = app;
