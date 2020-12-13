import dotenv from 'dotenv'
import App from "./app";

import mongoose from 'mongoose'

dotenv.config()

mongoose.connect('mongodb://localhost/app',{ useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    console.log('Connected to the db ')
})

const PORT = process.env.PORT || 3000


App.listen(PORT,() => console.log(`Àpp running  in ${PORT}`))