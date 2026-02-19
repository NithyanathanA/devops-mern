import { useEffect, useState } from 'react'
import './App.css'
const API_URL = import.meta.env.VITE_SERVER_URL;
function App() {
  const [name, setName] = useState("");
  const [allUser, setAllUser] = useState([]);


  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(`${API_URL}/get-user`);
      const data = await response.json();
      console.log(data)
      setAllUser(data); // save to state
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      console.log(data);

      setName("");        // clear input
      fetchUsers();       // refresh list

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h3>All Users</h3>

{allUser.length > 0 ? (
  allUser.map((user) => (
    <div key={user._id}>
      <p>Name: {user.user_name}</p>
      <p>Email: {user.email}</p>
    </div>
  ))
) : (
  <p>No users found</p>
)}

    </>
  )
}

export default App
