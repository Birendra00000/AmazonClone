import "./homepage.css";
import { Link, Navigate } from "react-router-dom";
import SearchResult from "../SearchResult/SearchResult";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { ApiCall } from "../../utilities/ApiCall";
import { useNavigate, createSearchParams } from "react-router-dom";

const Navbar = () => {
  const [suggestions, setSuggestions] = useState("");
  const [searchitem, setSearchitem] = useState("");
  const [category, setCategory] = useState("All");

  const handlesSearch = () => {
    ApiCall(`data/suggestions.json`).then((suggestionsResult) => {
      setSuggestions(suggestionsResult);
    });
  };

  useEffect(() => {
    handlesSearch();
  }, []);

  const onHandleSubmit = (event) => {
    event.preventDefault();

    Navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchitem: `${searchitem}`,
      })}`,
    });

    setSearchitem("");
    setCategory("All");
  };
  return (
    <>
      <div className="Navbar--maincontainer">
        <div className="nav-container">
          <div className="nav--card">
            <ul className="list--wrapper">
              <li className="listitem">SAVE MORE ON APP</li>
              <li className="listitem">RECHARGE AND PAYMENTS</li>
              <li className="listitem">SELL ON AMAZON</li>
              <li className="listitem">CUSTOMER CARE</li>
              <li className="listitem">TRACK MY ORDER</li>
              <li className="listitem">LOGIN </li>
              <li className="listitem">SIGN UP</li>
              <li className="listitem">LANGUAGE CHANGE</li>
            </ul>
          </div>
        </div>
        <div className="secondbar">
          <div className="second-logobar relative">
            <Link to="/">
              <div className="img-logo">
                <img
                  src="../favicon.ico"
                  alt="imagetitle"
                  className="ecommerce--logo"
                />
              </div>
            </Link>
            <div className="main--searh--card relative">
              <div className="search--bar">
                <input
                  type="search"
                  className="search--item"
                  placeholder="Search in amazon"
                  autoComplete="off"
                  value={searchitem}
                  onChange={(event) => setSearchitem(event.target.value)}
                />
              </div>
              <div className="search--logo " onClick={onHandleSubmit}>
                <SearchResult className="absoulte top-5 left-11" />
              </div>
            </div>
            <Link to="/checkout">
              <div className="cart--icon">
                <AiOutlineShoppingCart
                  size="2.8rem"
                  color=""
                  className="cart-logo"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="main--card--category">
          <div className="carousel"></div>
        </div>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute left-20 h-18 font-bold">
          {suggestions
            .filter((suggestion) => {
              const currentSearchitem = searchitem.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchitem &&
                title.startsWith(currentSearchitem) &&
                title !== currentSearchitem
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchitem(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
