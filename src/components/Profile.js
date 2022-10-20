import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";


export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path --> no more needed in RR v6
  

//using <Navigate/> in React Router v6 if the option: replace={true}, it replaces the current entry on the stack instead of pushing a new one
return (
    <main>
      {!loggedIn && <Navigate to="/sign-up" /> } 
      <h1>{currentUser.username}</h1> 
      <Link to={"/profile/edit"}>Edit</Link>
      <Outlet/>
    </main>
  )
}
