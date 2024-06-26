import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { BaseApi } from "../../apis/BaseAPI.ts";
import checkmarkIcon from '/assets/contentvec/shopping-bag.png'; 

// const memberships = [
//     {
//       name: 'Basic Plan',
//       price: '$20/month',
//       available_days: 'Mon, Wed, Fri',
//       available_entries: '10 entries/month',
//       hours_from: '6 AM',
//       hours_to: '10 PM',
//       occasions_per_day: '2',
//       is_active: true,
//     },
//     {
//       name: 'Standard Plan',
//       price: '$35/month',
//       available_days: 'Mon-Fri',
//       available_entries: '20 entries/month',
//       hours_from: '6 AM',
//       hours_to: '10 PM',
//       occasions_per_day: '3',
//       is_active: true,
//     },
//     {
//       name: 'Premium Plan',
//       price: '$50/month',
//       available_days: 'Mon-Sun',
//       available_entries: 'Unlimited entries',
//       hours_from: '5 AM',
//       hours_to: '11 PM',
//       occasions_per_day: 'Unlimited',
//       is_active: true,
//     },
//     {
//       name: 'Weekend Warrior',
//       price: '$15/month',
//       available_days: 'Sat-Sun',
//       available_entries: '8 entries/month',
//       hours_from: '8 AM',
//       hours_to: '8 PM',
//       occasions_per_day: '1',
//       is_active: true,
//     },
//     {
//       name: 'Night Owl',
//       price: '$25/month',
//       available_days: 'Mon-Fri',
//       available_entries: '15 entries/month',
//       hours_from: '8 PM',
//       hours_to: '6 AM',
//       occasions_per_day: '1',
//       is_active: true,
//     },
//     {
//       name: 'Student Plan',
//       price: '$30/month',
//       available_days: 'Mon-Fri',
//       available_entries: 'Unlimited entries',
//       hours_from: '6 AM',
//       hours_to: '10 PM',
//       occasions_per_day: 'Unlimited',
//       is_active: true,
//     },
//     {
//         name: 'Student Plan',
//         price: '$30/month',
//         available_days: 'Mon-Fri',
//         available_entries: 'Unlimited entries',
//         hours_from: '6 AM',
//         hours_to: '10 PM',
//         occasions_per_day: 'Unlimited',
//         is_active: true,
//       }
// ];

const ShopPage =() => {
  import("./index.css");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newMemberships = await BaseApi.getAllMemberships();
      setMemberships(newMemberships);
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
          <h1>MomentumGym Memberships</h1>
          <h3>Check out our latest offers and choose the plan that fits you best!</h3>
          <div className="cards-container">
            {memberships.map((membership, index) => (
              <div className="card" key={index}>
                <h2>{membership.name}</h2>
                <p><strong>Price:</strong> {membership.price}</p>
                <p><strong>Available Days:</strong> {membership.availableDays}</p>
                <p><strong>Available Entries:</strong> {membership.availableEntries}</p>
                <p><strong>Hours:</strong> {membership.hoursFrom} - {membership.hoursTo}</p>
                <p><strong>Occasions per Day:</strong> {membership.occasionsPerDay}</p>
                <button className="button-card" onClick={handleButtonClick}>Buy now</button>
              
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <img src={checkmarkIcon} alt="Check mark" className="popup-icon" />
          <p>Purchase successful!</p>
        </div>
      )}

      <footer>
        <div className="footer"></div>
        <p>Push it. Lift it. Sweat it.</p>
      </footer>
      </div>
    );
}

export default ShopPage;