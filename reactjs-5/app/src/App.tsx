import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserContext } from './userContext';

function App() {
  const [users, setUsers] = useState({
    Nicolas: true,
    Mary: true,
    Julia: true,
    John: true,
    Jorge: true,
  });

  // @ts-ignore
  const randomizeOneUser = (users) => {
    const names = Object.keys(users);
    const random = Math.floor(Math.random() * names.length);
    const newUsers = { ...users };
    newUsers[names[random]] = !users[names[random]];
    return newUsers;
  };

  const randomizeUsers = () => {
    setUsers(randomizeOneUser);
  };
  useEffect(() => {
    const interval = setTimeout(randomizeUsers, 5000);
    return; // ???
  }, [users]);
  return (
    // @ts-ignore
    <UserContext.Provider value={{ users, setUsers }}>
      <>
        <UserList />
        <UserStatus />
        <ActionButton />
      </>
    </UserContext.Provider>
  );
}

function UserList() {
  // @ts-ignore
  const { users, setUsers } = React.useContext(UserContext);
  return (
    <div style={{ padding: 20 }}>
      {Object.keys(users).map((key) => (
        <User name={key} status={users[key]} users={users} />
      ))}
    </div>
  );
}

// @ts-ignore
function User({ name, status, users }) {
  const currentlyOnline = Object.keys(users).filter((key) => users[key]).length;
  if (currentlyOnline === 1) {
    return (
      <p>
        {`${name}: ${status ? 'ONLINE' : 'OFFLINE'} ${
          status ? 'and I m all alone...' : ''
        }`}
      </p>
    );
  } else {
    return <p>{`${name}: ${status ? 'ONLINE' : 'OFFLINE'}`}</p>;
  }
}

// @ts-ignore
function UserStatus() {
  // @ts-ignore
  const { users, setUsers } = React.useContext(UserContext);
  const online = Object.keys(users).filter((key) => users[key]);
  return <p>There are currently {online.length} users online</p>;
}

// @ts-ignore
function ActionButton() {
  // @ts-ignore
  const { users, setUsers } = React.useContext(UserContext);

  // @ts-ignore
  const randomizeOneUser = (users) => {
    const names = Object.keys(users);
    const random = Math.floor(Math.random() * names.length);
    const newUsers = { ...users };
    newUsers[names[random]] = !users[names[random]];
    return newUsers;
  };
  const randomizeUsers = () => {
    setUsers(randomizeOneUser);
  };
  return (
    // @ts-ignore
    <button type='text' onClick={randomizeUsers}>
      Randomize now!
    </button>
  );
}
export default App;