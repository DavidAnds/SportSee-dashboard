import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import DashboardPage from "./pages/dashboard/dashboard"
import ErrorPage from "./pages/error/error"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard/12" />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard/:id",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/:id/:mock",
    element: <DashboardPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
