import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// const heading = React.createElement("h1", {}, "Hey Varsha Hello...!");
  // const heading = <h1>Hello Varsha..!</h1>'

  const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        setUserName("Varsha");
    },[]);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName}}>
            <div className="app">
                <UserContext.Provider value={{loggedInUser: "Varsha"}}>
                    <Header/>
                </UserContext.Provider>
                <Outlet/>
            </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter(
    [
        {
            path : "/",
            element :  <AppLayout/>,
            children: [
                {
                    path : "/",
                    element : <Body/>
                },
                {
                    path : "/about",
                    element : <AboutUs/>
                },
                {
                    path : "/contact",
                    element : <ContactUs/>
                },
                {
                    path : "/grocery",
                    element : <Suspense><Grocery/></Suspense>
                },
                {
                    path : "/restaurants/:resId",
                    element : <RestaurantMenu/>
                },
                {
                    path : "/cart",
                    element : <Cart/>
                }
            ],
            errorElement : <ErrorPage/>
        }
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);