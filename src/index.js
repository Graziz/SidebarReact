import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Produtos from "./Routes/Produtos";
import Início from "./Routes/Início";
import Reports from "./Routes/Reports";
import Navbar from "./componentes/NavBar";
import "./app.css";

const AppLayout = () => (
    <>
    <Navbar />
    <Outlet />
    </>
);

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<Início />} />
    <Route path="produtos" element={<Produtos />} />
    <Route path="reports" element={<Reports />} />
  </Route>
))

//const router = createBrowserRouter([
//    {
//element: <AppLayout/>,
//children: [
//  {
//    path: "/",
//    element: <Home />
//  },
//  {
//    path: "produtos",
//    element: <Produtos />,
//  },
//  {
//    path: "Reports",
//    element: <Reports />,
//  },
//]
//},  
//]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );