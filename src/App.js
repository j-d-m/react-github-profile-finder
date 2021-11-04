import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import User from "./components/User";
import "./css/style.css";

function App() {
  const [user, setUser] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    fetchUserProfile("j-d-m");
  }, []);

  const fetchUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    setUser(result);
  };

  const searchNewUser = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value.trim() !== "") {
      fetchUserProfile(inputRef.current.value);
    }
    inputRef.current.value = "";
  };
  return (
    <div className="App">
      <Header />
      <form onSubmit={searchNewUser}>
        <input type="text" name="username" className="search" ref={inputRef} />
        <input className="submit" type="submit" value="Search" />
      </form>

      {user && <User userdata={user} />}
    </div>
  );
}

export default App;
