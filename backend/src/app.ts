import express from "express"
import dotenv from "dotenv"
dotenv.config()  


const app = express()
const Port = process.env.PORT || 5000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Welcome to the Schemacraft Home route")
})

app.listen(Port, (): void => {
    console.log(`Server is running on ${Port}`)
})