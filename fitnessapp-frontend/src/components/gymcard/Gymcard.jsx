import "./index.css"



const GymCard = ({ name, is_active }) => {
    return (
      <div className="card-gym">
        <div className="card-gym-img"></div>
        <div className="card-gym-info">
          <div className="card-gymtext">
            <p className="text-gymtitle">{name}</p>
            <p className="text-gymsubtitle">{is_active ? 'Available' : 'Not Available'}</p>
          </div>
        </div>
      </div>
    );
  };
  export default GymCard;