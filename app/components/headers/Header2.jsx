"use client"

import Link from "next/link";
import Menus from "./Menus";
import SearchBtn from "./SearchBtn";

const Header2 = ({ openSearchModal }) => {
  return (
    <header className="header-area">
      <div className="top-bar dark-red-bg text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="top-left">
                <span className="text">
                  Free delivery for all orders over $50. Order your food now!
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="top-right d-flex align-items-center justify-content-lg-end">
                <span className="text">
                  <i className="far fa-envelope" />
                  Subscribe &amp; Get 10% Off
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Header Navigation ===*/}
      <div className="header-navigation pt-20 pb-20">
        <div className="nav-overlay" />
        <div className="container-fluid">
          {/*=== Primary Menu ===*/}
          <div className="primary-menu">
            {/*=== Site Branding ===*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-black.png"
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>
            {/*=== Nav Inner Menu ===*/}
            <div className="nav-inner-menu">
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Main Menu ===*/}
                <Menus />
                {/*=== Nav Button ===*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                      Book a Table
                      <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*=== Nav right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="search-button">
                  <SearchBtn openSearchModal={openSearchModal} />
                </div>
                <div className="nav-call-button">
                  <span>
                    <img src="assets/images/call.png" alt="icon" />
                    <a href="tel:000(123)45689">000 (123) 456 89</a>
                  </span>
                </div>
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                      Book a Table
                      <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header2;
