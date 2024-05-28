
//import { useState,useEffect } from "react";

import SidebarAdmin from "../../../components/adminsidebar/SidebarAdmin";


const MainPage = () =>{
    import("./index.css");    

    return (
    <div className="layout">
        <header>
            <p> Join our community and reserve your membership now! Get fit </p>
        </header>
        <nav className="menu">
            <SidebarAdmin/>
        </nav>
        <div className="landing-page">
            <div className="content">
                <h1>Transform Your Life at MomentumGym. Your Ultimate Destination</h1>
                <p>At MomentumGym, we believe that building strength and endurance is the foundation for a healthier, more vibrant life. Join us to push your limits and achieve your fitness goals in a supportive and motivating environment.</p>
                
                
            </div>
            <img src="assets/contentvec/lifting.png" alt="Runner" className="runner-image" />
        </div>
        
        <footer>
        <div className="footer"> </div>
          <p>Push it. Lift it. Sweat it.</p>
        </footer>

    </div>
    );

}

export default MainPage;