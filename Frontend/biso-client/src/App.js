import './App.scss'
import { generalContext } from './GeneralContext'
import Home from './Pages/Home';
import { Route, Routes, } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useState } from 'react';

function App() {
  const [sectionContactSelected, setSectionContactSelected] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [signUpSelected, SetSingUpSelected] = useState(false)
  console.log(signUpSelected)
  const [currentUserId, setCurrentUserId] = useState()
  return (
    <generalContext.Provider value={{
      sectionContactSelected,
      setSectionContactSelected,
      logIn,
      setLogIn,
      currentUserId,
      setCurrentUserId,
      signUpSelected,
      SetSingUpSelected

    }}>

      {logIn ? <Home /> : signUpSelected ? <Signup /> : <Login />}
      { }
      {/* <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/Singup" element={<Signup />} />


      </Routes> */}
    </generalContext.Provider>

  )
}

export default App;
