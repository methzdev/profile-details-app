import { useState } from 'react'
import profileImage from './assets/profile.png'
import './App.css'

function App() {
  const [points, setPoints] = useState(0)

  return (
    <div className="app">
      <div className="phone">

        <div className="header">
          <h2>My Profile</h2>
        </div>

        <div className="profile-content">

          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>

          <div className="divider"></div>

          <div className="profile-info">

            <h3>Name</h3>
            <p>Methma</p>

            <h3>Email</h3>
            <p>✉ nhmsivimini@nsbm.ac.lk</p>

            <h3>Points</h3>
            <p>★ {points}</p>

          </div>

        </div>

        <button
          className="add-button"
          onClick={() => setPoints(points + 1)}
        >
          +
        </button>

      </div>
    </div>
  )
}

export default App