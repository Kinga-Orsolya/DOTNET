import "./index.css";
//import { useState,useEffect } from "react";

import Sidebar from "../../components/sidebar/Sidebar";




const MainPage = () =>{
    

    return (
    <div className="layout">
        <header>

        </header>
        <nav className="menu">
            {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">QR Code</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
            <Sidebar/>
        </nav>
        <main>
            
        </main>
        <article className="widget">
        </article>
        <article className="statistics">
        </article>
        <footer>
           
        </footer>

    </div>
    );

}

export default MainPage;