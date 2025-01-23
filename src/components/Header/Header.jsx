import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Meet, Eat &
          <br />
          <span>Enjoy</span> the true <br />
          taste
        </h2>
        <button>
          <a href="#explore-menu">Explore Menu</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
