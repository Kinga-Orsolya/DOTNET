import Sidebar from "../../components/sidebar/Sidebar";
import "./index.css"



const memberships = [
    {
      name: 'Basic Plan',
      price: '$20/month',
      available_days: 'Mon, Wed, Fri',
      available_entries: '10 entries/month',
      hours_from: '6 AM',
      hours_to: '10 PM',
      occasions_per_day: '2',
      is_active: true,
    } ];

const ShopPage =() => {
    return (
    <div className="layout">
      <header>
        <p>Join our community and reserve your membership now! Get fit</p>
      </header>
      <nav className="menu">
        <Sidebar/>

      </nav>
      <div className="landing-page">
        <div className="content">
          <h1>MomentumGym Memberships</h1>
          <p>Check out our latest offers and choose the plan that fits you best!</p>
          <div className="cards-container">
            {memberships.map((membership, index) => (
              <div className="card" key={index}>
                <h2>{membership.name}</h2>
                <p><strong>Price:</strong> {membership.price}</p>
                <p><strong>Available Days:</strong> {membership.available_days}</p>
                <p><strong>Available Entries:</strong> {membership.available_entries}</p>
                <p><strong>Hours:</strong> {membership.hours_from} - {membership.hours_to}</p>
                <p><strong>Occasions per Day:</strong> {membership.occasions_per_day}</p>
                <button className="button-card">Buy now</button>
              </div>
            ))}
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

export default ShopPage;