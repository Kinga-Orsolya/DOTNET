//import React from "react"; // Nem mindig szükséges, de ajánlott a konzisztensebb kód érdekében
import "./index.css";

const SidebarAdmin = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="assets/contentvec/gym.png" />
                <h2> MomentumG Admin</h2>
            </div>

            <ul className="sidebar-links">
                
                <li>
                    <span className="symbols">
                        <img src="assets/contentui/home.png" alt="homepage"></img>
                    </span>
                    <a href="/Admin/MainLayout">Home</a>
                </li>

                <li>
                    <span className="symbols">
                        <img src="assets/contentui/gym2.png" alt="homepage"></img>
                    </span>
                    <a href="/Admin/Shop">Gym</a>
                </li>

               

                {/* <li>
                    <span className="symbols">
                        <img src="assets/contentui/profile.png" alt="homepage"></img>
                    </span>
                    <a href="/landingpage">Profile</a>
                </li> */}


                <li>
                    <span className="symbols">
                        <img src="assets/contentui/exit.png" alt="homepage"></img>
                    </span>
                    <a href="/landingpage">Log Out</a>
                </li>
            </ul>



        </div>
    );
};

export default SidebarAdmin;