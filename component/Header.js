

import { Link } from "react-router-dom";


const Header = () => {
    
    return (
       <div className="overflow-x-hidden w-full">
         <div className="fixed z-10 w-screen flex top-0 left-0 justify-between  bg-[#030230] text-white">
            <div className="flex justify-center items-center m-2 p-2 text-xl font-bold">
               CPU Scheduler
            </div>
            <div >
                <ul className="flex flex-wrap justify-center  items-center m-2 p-2 text-xl font-bold">
                
                <li className="m-2 p-2">
                    <Link to="/">Home </Link>
                </li>
                <li className="m-2 p-2">
                    <Link to="/Algorithm">Algorithm</Link>
                </li>
                <li className="m-2 p-2">
                   <Link to="/About">About Us</Link>
                   </li>
              
                </ul>
            </div>
        </div>
       </div>
    );

};
export default Header;