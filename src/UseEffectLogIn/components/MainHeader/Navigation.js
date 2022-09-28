import React, {useContext} from 'react';
import AuthContext from '../../Store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx=useContext(AuthContext);

  return (
   <>
          <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <p>Users</p>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <p>Admin</p>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
