//import React from "react"; // Nem mindig szükséges, de ajánlott a konzisztensebb kód érdekében

const SidebarAdmin = () => {
    import("./index.css");
    
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
                    <a href="/Admin/Clients">Clients</a>
                </li>
                <li>
                    <span className="symbols">
                        <img src="assets/contentui/gym2.png" alt="homepage"></img>
                    </span>
                    <a href="/Admin/Entries">Entries</a>
                </li>
                <li>
                    <span className="symbols">
                        <img src="assets/contentui/gym2.png" alt="homepage"></img>
                    </span>
                    <a href="/Admin/Memberships">Memberships</a>
                </li>
                <li>
                    <span className="symbols">
                        <img src="assets/contentui/gym2.png" alt="homepage"></img>
                    </span>
                    <a href="/Admin/Gyms">Gyms</a>
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
                    <a href="/">Log Out</a>
                </li>
            </ul>



        </div>
    );
};




export default SidebarAdmin;