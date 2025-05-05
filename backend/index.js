const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


try {
    mongoose.connect(process.env.MONGO);
} catch (error) {
    console.log(error)
}

app.get("/", (req, res)=>{
    res.send('hello')
})
app.use('/users', userRoutes);

app.listen(3000, () => {
console.log("running")
});