import React, { useState } from "react";
import { User } from "./User";
import { IUser } from "../models/IUser";

interface IListProps {
  users: IUser[];
  onSelect(id: string): void;
}

export const List: React.FC<IListProps> = ({ users, onSelect }) => {
  const [selectId, setSelectId] = useState<string | null>(null);

  const selectHandler = (id: string) => {
    setSelectId(id);
    onSelect(id);
  };

  return (
    <>
      <ul className="list-wrapper">
        {users.map((user) => (
          <User
            key={user.id}
            {...user}
            selected={user.id === selectId}
            onSelect={selectHandler}
          />
        ))}
      </ul>
    </>
  );
};
