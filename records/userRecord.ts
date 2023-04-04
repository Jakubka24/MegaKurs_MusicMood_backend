import {v4 as uuid} from 'uuid'
import {pool} from "../utils/db";
import {UserEntity} from '../types';


export interface User {
    id: string
    userName: string
    password: string
    emailAddress: string
}

export class UserRecord implements UserEntity {
    public id: string
    public userName: string
    public password: string
    public emailAddress: string


    constructor(obj: User) {
        this.id = obj.id;
        this.userName = obj.userName;
        this.password = obj.password;
        this.emailAddress = obj.emailAddress;
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid()
        }

        await pool.execute("INSERT INTO `user_info`(`id`,`userName`,`password`,`emailAddress`) VALUES(:id,:userName,:password,:emailAddress)", {
            id: this.id,
            userName: this.userName,
            password: this.password,
            emailAddress: this.emailAddress,
        })
    }


}
