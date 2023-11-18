import { IUser } from "./IUser";

export interface IUserDetails extends IUser {
    avatar: string,
    details: {
        city: string,
        company: string,
        position: string
    }
}