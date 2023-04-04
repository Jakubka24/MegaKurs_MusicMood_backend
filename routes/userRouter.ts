import {Router} from "express";
import {UserRecord} from "../records/userRecord";
import {LogRecord} from "../records/logRecord"

export const userRouter = Router();


userRouter

    .post('/add', async (req, res) => {
        const AddUser = new UserRecord(req.body);
        await AddUser.insert();
        res.json(AddUser);

    })

    .get('/:userName/:password', async (req, res) => {
        const CheckUser = new LogRecord(req.params);
        const data = await CheckUser.findUser(req.params.userName, req.params.password);
         res.json({data})
    })


