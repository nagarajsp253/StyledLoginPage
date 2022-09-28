import React, { useEffect, useState, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Store/auth-context';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=>{
  //   const value=localStorage.getItem('isLoggedIn');
  //   if(value==='1'){
  //     setIsLoggedIn(true);
  //   }
  //  },[]);
   
  // const loginHandler = (email, password) => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem('isLoggedIn', '1');
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('isLoggedIn');
  // };

  const ctx=useContext(AuthContext);

  return (
      <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
  )
}

export default App;

