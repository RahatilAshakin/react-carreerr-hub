import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statictis from './Components/Statictis/Statictis';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
{
  path:"/",
  element: <Home></Home>
},
{
  path:"/Jobs",
  element: <Jobs></Jobs>
},
{
  path:"/Applied",
  element: <AppliedJobs></AppliedJobs>
},
{
  path:"/Statictis",
  element: <Statictis></Statictis>
},
{
  path:"/Blogs",
  element: <Blogs></Blogs>
},
{

  path:'/Job/:id',
  element:<JobDetails></JobDetails>,
  loder: ()=> fetch(`../jobs.json`)

}



    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
