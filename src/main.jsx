import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayOut from './Root/MainLayOut'
import HomeLayOut from './Home/HomeLayOut'
import TimeLinePage from './Pages/TimeLinePage'
import StartsPage from './Pages/StartsPage'
import FriendsDetails from './Component/FriendsDetails/FriendsDetails'

const router=createBrowserRouter([
  {
    path:'/',
    Component:MainLayOut,
    children:[
      {index:true,Component:HomeLayOut},
      {path:'/timeLine',Component:TimeLinePage},
      {path:"/starts", Component:StartsPage},
      {path:"home/:id",Component:FriendsDetails}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
