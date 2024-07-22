import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/Home';
import Play from './routes/Play';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: '/play',
        element: <Play/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);