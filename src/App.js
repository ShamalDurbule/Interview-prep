import "./App.css";
import React from "react";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact-us.js";
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter , Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);

export default App;
export {appRouter};
