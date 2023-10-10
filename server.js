import express from "express"

import { getAllNotes } from "./controllers/notes.controller.js"

const app = express()
const port = 3000

app.use(express.json())


app.get('/', (req,res) =>{
    res.send('Hallo Welt!')
})

app.get('/api/notes', getAllNotes)


app.listen( port, () =>{
    console.log(`Server is listening on port ${port}`)
    console.log(`You cann access the server with: http://localhost:${port}`)
} )
// for CodeBuddy! :)
export default app;
