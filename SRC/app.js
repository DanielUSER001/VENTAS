const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middleware/erroHandler");
const helmet = require("helmet");
const cors = require("cors")
const authRoute = require("./routes/authRoute")
const cartdRoute = require("./routes/cartRoute")
const paymentdRoute = require("./routes/paymentRoute")
const productdRoute = require("./routes/prodoctRoute")
const app = express();


app.use(cors())
app.use(helmet())
app.use(body_parser.json()) 

app.use("/api/auth", authRoute)
/* app.use("/api/cart", cartdRoute)
app.use("/api/payment", paymentdRoute)*/
app.use("/api/product", productdRoute)
app.use(errorHandler) // CONTROLADOR DE ERRORES
 


const PORT = process.env.DB_PORT || 3000
app.listen(PORT, ()=> {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT)
})
