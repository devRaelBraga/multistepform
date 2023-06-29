import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import Root from './Root';
import './reset.css'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <StepOne/>,
      },
      {
        path: "/1",
        element: <StepOne/>,
      },
      {
        path: "/2",
        element: <StepTwo/>,
      },
      {
        path: "/3",
        element: <StepThree/>,
      },
      {
        path: "/4",
        element: <StepFour/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
