import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { serch } from "../../services";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [playSearch, setPlaySearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setSearchValue("");
    setPlaySearch(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch search results when searchValue changes
  useEffect(() => {
    if (searchValue) {
      serch(searchValue)
        .then((data) => {
          setSearchData(data.results);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    } else {
      setSearchData([]);
    }
  }, [searchValue]);

  // Update playSearch when searchData changes
  useEffect(() => {
    setPlaySearch(searchData.length > 0);
  }, [searchData]);

  const handleValueChange = (e) => setSearchValue(e.target.value);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "fixed-black" : ""}`}
      >
        <div className="d-flex container text-light justify-content-between">
          <Link
            to="/"
            className="text-light text-decoration-none fw-bolder fs-5 brand"
          >
            <span className="text-danger text-decoration-line-through">M</span>
            ovies<span className="line"></span>
          </Link>
          <ul className="list-unstyled d-flex gap-5 mt-3">
            <li>
              <Link
                to="/"
                className="text-decoration-none text-light navbar-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/yourmovies"
                className="text-decoration-none text-light navbar-link"
              >
                Your Movies
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="text-decoration-none text-light navbar-link"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <div className="search-box text-center">
            {!showSearch && (
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={toggleSearch}
              ></i>
            )}
            <div
              className={`search-container ${showSearch ? "show" : ""}`}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                autoFocus={showSearch}
                onBlur={(e) => {
                    e.target.value=""


                }}
                onChange={handleValueChange}
              />
              {showSearch && (
                <i
                  className="fa-solid fa-times close-icon"
                  onClick={closeSearch}
                ></i>
              )}
              {playSearch && (
                <div className="output-search">
                  {searchData.map((obj) => (
                    <Link key={obj.id} className="text-decoration-none text-light" to={`/details/${obj.id}`} onClick={closeSearch}>
                      <div className="my-3 search-output-box d-flex align-items-center rounded-2 px-3">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                          className="rounded-3 img-search fs-6 fw-light"
                          alt="not Found"
                        />
                        <h6 className="fw-medium ms-2 change-font change-font-size">{obj.title}</h6>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
