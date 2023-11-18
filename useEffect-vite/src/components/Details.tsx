import React, { useState, useEffect } from "react";
import { IUserDetails } from "../models/IUserDetails";
import { IUser } from "../models/IUser";

interface IDetailsProps {
  info: IUser | null;
}

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data";

export const Details: React.FC<IDetailsProps> = ({ info }) => {
  const [user, setUser] = useState<IUserDetails | null>(null);

  const fetchRequest = async (id: string) => {
    try {
      const response = await fetch(`${url}/${id}.json`);
      if (!response.ok) {
        throw new Error("Load is failed!");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!info) {
      return;
    }
    fetchRequest(info.id);
  }, [info]);

  if (!user) return null;

  return (
    <>
      {user && (
        <div className="user">
          <h3 className="user-name">{user?.name}</h3>
          <img src={user?.avatar} alt={user?.name} className="user-avatar" />
          <ul className="user-details-group">
            <li className="user-details">City: {user?.details.city}</li>
            <li className="user-details">Company: {user?.details.company}</li>
            <li className="user-details">Position: {user?.details.position}</li>
          </ul>
        </div>
      )}
    </>
  );
};
