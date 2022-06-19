import leaderboard from "./assets/leaderboard.png";
import numbers from "./assets/numbers.PNG";
import world from "./assets/world.PNG";

const Home = () => {
  return (
    <div className="home container">
      <div className="card">
        <img className="zoom blur" src={numbers} alt="image1" />
        <div className="card-content fade">
          <h2>Number Generator</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi quod temporibus ab eaque dolores, laborum assumenda fugit
            voluptas tempore, dolor deleniti aut officiis ducimus eveniet vitae
            iusto atque dicta.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img className="zoom blur" src={leaderboard} alt="image2" />
        <div className="card-content fade">
          <h2>Personal Leaderboard</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi quod temporibus ab eaque dolores, laborum assumenda fugit
            voluptas tempore, dolor deleniti aut officiis ducimus eveniet vitae
            iusto atque dicta.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img className="zoom blur" src={world} alt="image3" />
        <div className="card-content fade">
          <h2>World Countries Data</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi quod temporibus ab eaque dolores, laborum assumenda fugit
            voluptas tempore, dolor deleniti aut officiis ducimus eveniet vitae
            iusto atque dicta.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
