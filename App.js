import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Header from "./component/Header";
import About from './component/About';
import Algorithm from './component/Algorithm'
import Footer from './component/Footer'
import Body from "./component/Body";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Favicon from "react-favicon";

const AppLayout = () =>{
    const [faviconUrl, setFaviconUrl] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSLGXJwLws1CRyYX_NFhnTJSi_M37wMLTFw&s"
            );
    return <div className="App max-w-[1400px]">
         <Favicon url={faviconUrl} />
        <Header />
        <Outlet />
        <Footer />
    </div>
}
const App = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/Algorithm",
                element:<Algorithm />
            },
            {
                path:"/About",
                element:<About />
            }
           
        ],
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={App}/>);