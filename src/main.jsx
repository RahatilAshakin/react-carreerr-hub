import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AvailableJobs from './Components/AvailableJobs/AvailableJobs';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statictis from './Components/Statictis/Statictis';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

// Create your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Jobs",
        element: <AvailableJobs />,
        loader: () => fetch('/jobs.json').then(res => res.json()),  // Fetch and return JSON data
      },
      {
        path: "/Applied",
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json').then(res => res.json()),  // Same as above
      },
      {
        path: "/Statictis",
        element: <Statictis />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Job/:id",
        element: <JobDetails />,
        loader: () => fetch('/jobs.json').then(res => res.json()), // Fetch job data for JobDetails
      },
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
