import React from 'react'
import { useNavigate } from 'react-router-dom';

function Base({title,children}) {
    const navigate= useNavigate();

    const handleLogout= ()=>{
        localStorage.removeItem("token");
        navigate("/login")
    }
  return (
    <div>

<nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
       <a class="nav-link" href="home"><b><h3>Dashboard</h3></b></a>
        </li>
         <li class="nav-item active">
        <a class="nav-link" href="/task"><b> <h3>Task</h3></b> </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/leaderboard"><b><h3>LearderBoard</h3></b></a>
        </li>
        </ul>
        </div>
        <button class="btn btn btn-light" type="submit" onClick={handleLogout}>Logout</button>
    </nav>
        <div className="main">
        <h1>{title}</h1>
        <div className="content">{children}</div>
        </div>
    </div>
  )
}

export default Base