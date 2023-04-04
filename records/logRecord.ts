import {pool} from "../utils/db";
import {LogEntity} from '../types';


export interface Log {
    userName: string
    password: string
}

export class LogRecord implements LogEntity {
    public userName: string
    public password: string


    constructor(obj: Log) {
        this.userName = obj.userName;
        this.password = obj.password;
    }

    async findUser(name: string, password: string): Promise<void> {
        const [result]: any = await pool.execute("SELECT * FROM `user_info` WHERE `userName` LIKE :userName AND `password` LIKE :password", {
            userName: name,
            password: password,
        })
        return result.length === 0 ? null : result[0]
    }

    //@TODO zmienić typy z any na jakieś normalne!
}
