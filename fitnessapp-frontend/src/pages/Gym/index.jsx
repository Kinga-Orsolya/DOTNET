import { useEffect, useState } from "react";
import { BaseApi } from "../../apis/BaseAPI.ts";
import GymCard from "../../components/gymcard/Gymcard";
import Sidebar from "../../components/sidebar/Sidebar";


const GymPage =() => {
  import("./index.css");

  // const gyms = [
  //   {
  //     name: 'Fitness World',
  //     is_active: true
  //   },
  //   {
  //     name: 'Healthy Life Gym',
  //     is_active: false
  //   },
  //   {
  //     name: 'Powerhouse Gym',
  //     is_active: true
  //   }
  // ];
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newGyms = await BaseApi.getAllGyms();
      setGyms(newGyms);
    }
    
    fetchData();
  }, []);

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
          
        
        <div className="gym-card-holder">
          { gyms.map((gym, index) => (
            <GymCard key={index} name={gym.name} is_active={gym.isActive} />
          )) }
        </div>
          

          
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
