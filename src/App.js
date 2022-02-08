import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/user/allusers')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>Digital Village start here</h1>
      {users.map((user) => (
        <h2>{user.name}</h2>
      ))}
    </div>
  );
}

export default App;
