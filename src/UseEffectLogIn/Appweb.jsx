import React from 'react'
import App from './App';
import {AuthContextProvider} from './Store/auth-context';

const Appweb = () => {
  return (
    <>
     <AuthContextProvider>
        <App/> 
     </AuthContextProvider>
      
    </>
  )
}

export default Appweb
