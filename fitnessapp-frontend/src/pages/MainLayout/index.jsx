//import { useState,useEffect } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
//import Button from "../../components/button/Button";




const MainPage = () =>{
    import("./index.css");

    return (
    <div className="layout">
        <header>
            <p> Join our community and reserve your membership now! Get fit </p>
        </header>
        <nav className="menu">
            <Sidebar/>
        </nav>
        <div className="landing-page">
            <div className="content">
                <h1>Transform Your Life at MomentumGym. Your Ultimate Destination</h1>
                <p>At MomentumGym, we believe that building strength and endurance is the foundation for a healthier, more vibrant life. Join us to push your limits and achieve your fitness goals in a supportive and motivating environment.</p>

                <div className="button-container">
                    <button onClick={goToGym} className="button-shop"> Check Out Gym</button>
                    <button onClick={goToShop}className="button-join"> Shop Now </button>
                </div>
                <img src="assets/contentvec/heart.png" alt="Stretching" className="stretch-image" />

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


function goToShop() {
    window.location.href = "/Shop" 
}
function goToGym() {
    window.location.href = "/Gym" 
}

export default MainPage;