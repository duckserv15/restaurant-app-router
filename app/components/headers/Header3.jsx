"use client"

import Link from "next/link";
import Menus from "./Menus";
const Header3 = () => {
  return (
    <header className="header-area transparent-header">
      {/*=== Header Navigation ===*/}
      <div className="header-navigation navigation-two navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          {/*=== Primary Menu ===*/}
          <div className="primary-menu">
            {/*=== Site Branding ===*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>
            {/*=== Nav Inner Menu ===*/}
            <div className="nav-inner-menu">
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center"></div>
                {/*=== Main Menu ===*/}
                <Menus />
              </div>
              {/*=== Nav right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
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
                      <i className="far fa-arrow-right" />
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
export default Header3;
