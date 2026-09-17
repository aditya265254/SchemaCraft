import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config()  


const app = express()
const Port = process.env.PORT || 5000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Welcome to the Schemacraft Home route")
})

connectDb()
  .then(() => {
    app.listen(Port, (): void => {
      console.log(`Server is running on ${Port}`)
    })
  })
  .catch((error) => {
    console.error("DB connection failed", error)
    process.exit(1)
  })