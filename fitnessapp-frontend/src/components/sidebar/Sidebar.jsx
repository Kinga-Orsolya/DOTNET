//import React from "react"; // Nem mindig szükséges, de ajánlott a konzisztensebb kód érdekében

const Sidebar = () => {
    import("./index.css");
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="assets/contentvec/gym.png" />
                <h2> MomentumG </h2>
            </div>

            <ul className="sidebar-links">
                
                <li>
                    <span className="symbols">
                        <img src="assets/contentui/home.png" alt="homepage"></img>
                    </span>
                    <a href="/MainLayout">Home</a>
                </li>

                <li>
                    <span className="symbols">
                        <img src="assets/contentui/gym2.png" alt="homepage"></img>
                    </span>
                    <a href="/Gym">Gym</a>
                </li>

                <li>
                    <span className="symbols">
                        <img src="assets/contentui/bag.png" alt="homepage"></img>
                    </span>
                    <a href="/Shop">Shop</a>
                </li>


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

export default Sidebar;