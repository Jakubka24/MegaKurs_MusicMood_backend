import express = require("express");
import {musicRouter} from "./routes/musicRouter";
import cors = require("cors");
import './utils/db';
import {userRouter} from "./routes/userRouter";
import rateLimit from "express-rate-limit";

const app = express();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 150,
}));


app.use('/music', musicRouter);
app.use('/user', userRouter);

app.listen(3001, 'localhost', () => {
    console.log('Listening on http://localhost:3001')
});