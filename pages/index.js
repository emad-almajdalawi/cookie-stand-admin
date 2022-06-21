import CookieStandAdmin from './components/CookieStandAdmin'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import axios from "axios"

function index() {
  const [token, setToken] = useState(null)
  const [invalidLogIn, setInvalidLogIn] = useState(false)

  function logInHandler(e) {
    e.preventDefault()
    // setLoggedIn(true)
    const userData = { username: e.target.username.value, password: e.target.password.value }

    if (localStorage.token === undefined) {
      axios.post("https://cookies-stand-401.herokuapp.com/api/token/", userData).then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.access) // you can add access directly to the token (setToken)
        setToken(res.data.access)
      })
        .catch(err => {
          console.log(err)
          setInvalidLogIn(true)
        })
    }
    else {
      setToken(localStorage.getItem("token"))
    }

  }


  return (
    <div>
      {token ? <CookieStandAdmin setToken={setToken} token={token} /> : <Login logInHandler={logInHandler} invalidLogIn={invalidLogIn} />}
    </div>
  )
}

export default index