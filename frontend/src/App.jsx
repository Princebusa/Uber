import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProtectWrapper>
          <Home />
        </UserProtectWrapper>} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-Signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/user/logout" element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App