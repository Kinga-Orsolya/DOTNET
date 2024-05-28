import GymCard from "../../components/gymcard/Gymcard";
import Sidebar from "../../components/sidebar/Sidebar";

import "./index.css"


const GymPage =() => {


    

    return (
    <div className="layout-shop">
      <header>
        <p>Join our community and reserve your membership now! Get fit</p>
      </header>
      <nav className="menu-shop">
        <Sidebar/>

      </nav>
      <div className="landing-page-shop">
        <div className="content-shop">
          <h1>Choose the Gym that Fits Best for You</h1>
          
        

          <GymCard/>
          <GymCard/>
          <GymCard/>
          <GymCard/>

          
        </div>
      </div>
      <footer>
        <div className="footer"></div>
        <p>Push it. Lift it. Sweat it.</p>
      </footer>
      </div>
    );
}

export default GymPage;