import Home from './components/CookieStandAdmin'
import { useState } from 'react'
import Login from './components/Login'

function index() {
  const [loggedIn, setLoggedIn] = useState(false)
  function logInHandler() {
    setLoggedIn(true)
  }
  return (
    <div>
      {loggedIn ? <Home setLoggedIn={setLoggedIn} /> : <Login logInHandler={logInHandler} />}
    </div>
  )
}

export default index