import React from "react";
import { IUser } from "../models/IUser";

interface IUserItem extends IUser {
    selected: boolean,
    onSelect(id: string): void
}

export const User: React.FC<IUserItem> = ({ name, id, selected, onSelect }) => {
    const onClickHandler = (id: string) => {
        onSelect(id)
    };

    let className = 'user';
    if (selected) {
        className = className + ' selected';
    }

    return (
        <li className={className} onClick={() => onClickHandler(id)}>{name}</li>
    )
}