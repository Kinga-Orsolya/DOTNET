//import { useState,useEffect } from "react";

import SidebarAdmin from "../../../components/adminsidebar/SidebarAdmin";
import ClientContent from "../../../components/clientcontent/ClientContent";


const ClientsPage = () =>{
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
            <ClientContent/>
            
            <footer>
            <div className="footer"> </div>
              <p>Push it. Lift it. Sweat it.</p>
            </footer>
    
        </div>
        );

}

export default ClientsPage;