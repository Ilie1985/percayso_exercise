import "../Header/header.css";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";

//divide the header in 3(logo,searchbar,nav)
//divide nav in 3 (item)
//bring in basket and store icon from material UI
//create an input type text with a className
//bring in search incon  from material ui for search bar

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <NewspaperIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle">niNews</h2>
      </div>

      {/* ==============================================================*/}

      <div className="header_searchBar">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      {/*==================================================================  */}

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <button className="nav_itemLineTwo">Sign In</button>
        </div>
      </div>
      {/* =========================================================== */}
    </div>
  );
};


export default Header;
