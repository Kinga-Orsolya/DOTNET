//import { useState,useEffect } from "react";

import SidebarAdmin from "../../../components/adminsidebar/SidebarAdmin";
import GymContent from "../../../components/gymcontent/GymContent";


const GymsPage = () =>{
    import("./index.css");
    

    return (
        <div className="layout">
            <header>
                <p> Join our community and reserve your membership now! Get fit </p>
            </header>
            <nav className="menu">
                <SidebarAdmin/>
            </nav>
            {/* <div className="landing-page">
                
                
            </div> */}
            <GymContent/>
            
            <footer>
            <div className="footer"> </div>
              <p>Push it. Lift it. Sweat it.</p>
            </footer>
    
        </div>
        );

}

export default GymsPage;