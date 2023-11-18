import React, { useState, useEffect } from 'react';
import { IUser } from './models/IUser';
import { List } from './components/List';
import { Details } from './components/Details';

import './App.css';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data'

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [infoUser, setInfoUser] = useState<IUser | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/users.json`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const selectUser = (id: string) => {
    const selectedUser = users.find(user => user.id === id);
    if (selectedUser) {
      setInfoUser(selectedUser);
    }
  };

  return (
    <div className='App'>
      <div className='user-container'>
        <div className='users'>
          <List users={users} onSelect={selectUser}/>
        </div>
        <div className='user-info'>
          <Details info={infoUser}/>
        </div>
      </div>
    </div>
  )

}

export default App
