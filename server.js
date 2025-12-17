
require('dotenv').config()
const app=require('./app')
const port=process.env.PORT
const healthrouter=require('./src/routes/health.route')
const greetrouter=require('./src/routes/greet.route')
const productsrouter=require('./src/routes/products.route')
const usersrouter=require('./src/routes/users.route')
app.use('/',healthrouter)
app.use('/',greetrouter)
app.use('/',productsrouter)
app.use('/',usersrouter)
console.log("PORT value:", process.env.PORT)
const connectdb=require('./src/config/db.config')
const startserver=async()=>{
    await connectdb();
    app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})
}
startserver();

//server-rotes-controllers-services is the flow of the project or web