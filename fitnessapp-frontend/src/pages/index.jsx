import "./index.css";
import Blob from "../components/blobs/Blob";
import Button from "../components/button/Button";
const Home = () => {
  return (
    <div className="container-home">
          <div className="background">
                 {/* Blob komponensek beillesztése */}
                <Blob top="-150px" left="-150px" backgroundColor="rgb(162, 123, 92)" />
                <Blob top="20%" left="60%" backgroundColor="rgb(115, 144, 114)" />
                <Blob top="50%" left="20%" backgroundColor="rgb(194, 73, 20)" />
                <Blob top="70%" left="-40%" backgroundColor="rgb(24, 29, 49)" />
                <Blob top="-10%" left="30%" backgroundColor="rgb(238, 108, 77)" />

                <h1 className="app-name">Momentum Gym</h1> {/* h1 elem a háttér felett */}


                <Button onClick={goToLogin} className="button"> Get started </Button> {/* Button a háttér felett */}


          </div>        
      </div>
  );
};

function goToLogin() {
  window.location.href="/Login";
}

export default Home;
