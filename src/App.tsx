import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'




import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home'
import { useAppSelector } from './context/hooks'
import NewUser from './pages/newUser/NewUser'
import Transactions from './pages/transactions/Transactions'
import Balances from './pages/balances/Balances'
import UpdatePassword from './pages/updatePassword/updatePassword'

function App() {
  const loggedIn = useAppSelector(state => state.user.LoggedIn)
  const user = useAppSelector(state => state.user.user)
  console.log(user)




  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedIn ? <Home /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/login",
      element: !loggedIn ? <Login /> : <Navigate replace to={"/"} />,
    },
    {
      path: "/newuser",
      element: loggedIn ? <NewUser /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/balances",
      element: loggedIn ? <Balances /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/update",
      element: loggedIn ? <UpdatePassword /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/transactions",
      element: loggedIn ? <Transactions /> : <Navigate replace to={"/login"} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
