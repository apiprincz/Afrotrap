import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
// import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialHandle from "./SocialHandle";
import CollectionsMenu from "./CollectionsMenu";

library.add(fab, faCartPlus);

export const Navbar = () => {
  const router = useRouter();

  const nav = (e) => {
    e.currentTarget.style.borderBottom = "4px solid #ffffff";
    e.currentTarget.nextSibling.classList.add(`${Styles.NavLinkContentShow}`);
  };
  const navRemove = (e) => {
    e.currentTarget.style.borderBottom = "";
    e.currentTarget.nextSibling.classList.remove(
      `${Styles.NavLinkContentShow}`
    );
  };
  const navEnter = (e) => {
    e.currentTarget.previousSibling.style.borderBottom = "4px solid #ffffff";
    e.currentTarget.classList.add(`${Styles.NavLinkContentShow}`);
  };
  const navReset = (e) => {
    e.currentTarget.previousSibling.style.borderBottom = "";

    e.currentTarget.classList.remove(`${Styles.NavLinkContentShow}`);
  };

  return (
    <div className={`row d-flex align-items-flex-start ${Styles.Navbar}`}>
      <div
        className={`col-md-5 ${Styles.NavLogo} ${
          router.pathname === "/" ? `${Styles.Navcol}` : ""
        }`}
      >
        <Logo />
      </div>

      <nav
        className={`navbar navbar-expand-sm navbar-light col-md-7 ${Styles.Nav}`}
      >
        <div className={`container-fluid ${Styles.Container}`}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${Styles.innerContainer}`}
            id="navbarNavAltMarkup"
          >
            <div
              className={`navbar-nav flex-fill ${Styles.NavLinkExt}`}
              style={{ justifyContent: "space-between" }}
            >
              <Link href="/">
                <a
                  className={`active ${Styles.NavLinkLink}`}
                  aria-current="page"
                >
                  HOME
                </a>
              </Link>
              <div className={Styles.NavLink}>
                <Link href="/contact">
                  <a
                    className={` ${Styles.NavLinkLink}`}
                    onMouseEnter={(e) => nav(e)}
                    onMouseLeave={(e) => navRemove(e)}
                  >
                    CONTACT
                  </a>
                </Link>

                <CollectionsMenu
                  onMouseEnter={(e) => navEnter(e)}
                  onMouseLeave={(e) => navReset(e)}
                />
              </div>
              <div className={Styles.NavLink}>
                <Link href="/collections">
                  <a
                    className={` ${Styles.NavLinkLink}`}
                    onMouseEnter={(e) => nav(e)}
                    onMouseLeave={(e) => navRemove(e)}
                  >
                    COLLECTIONS
                  </a>
                </Link>
                <CollectionsMenu
                  onMouseEnter={(e) => navEnter(e)}
                  onMouseLeave={(e) => navReset(e)}
                />
              </div>
              <SocialHandle />
              <div className={Styles.cartIcon}>
                <div className={Styles.NavLink}>
                  <Link href="/cart">
                    <a
                      className={`${Styles.Nav_social} ${Styles.NavLinkLink}`}
                      target="_blank"
                      href="#"
                    >
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className={Styles.SvgCart}
                      />
                    </a>
                  </Link>

                  <div className={Styles.cartCount}>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export const NavbarMobile = () => {
  const router = useRouter();

  const nav = (e) => {
    e.currentTarget.style.borderBottom = "4px solid #ffffff";
    e.currentTarget.nextSibling.classList.add(`${Styles.NavLinkContentShow}`);
  };
  const navRemove = (e) => {
    e.currentTarget.style.borderBottom = "";
    e.currentTarget.nextSibling.classList.remove(
      `${Styles.NavLinkContentShow}`
    );
  };
  const navEnter = (e) => {
    e.currentTarget.previousSibling.style.borderBottom = "4px solid #ffffff";
    e.currentTarget.classList.add(`${Styles.NavLinkContentShow}`);
  };
  const navReset = (e) => {
    e.currentTarget.previousSibling.style.borderBottom = "";

    e.currentTarget.classList.remove(`${Styles.NavLinkContentShow}`);
  };

  return (
    <div
      className={`row d-flex align-items-flex-start ${Styles.Navbar} ${Styles.Navbar_mobile}`}
    >
      <div
        className={`col-md-5 ${Styles.NavLogo} ${
          router.pathname === "/" ? `${Styles.Navcol}` : ""
        }`}
      ></div>

      <nav
        className={`navbar navbar-expand-sm navbar-light col-md-7 ${Styles.Nav}`}
      >
        <div className={`container-fluid ${Styles.Container}`}>
          <div className={Styles.logo}>
            <img src="/Afrotrap.png" alt="Logo"></img>
          </div>

          <button
            className={`navbar-toggler ${Styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${Styles.innerContainer}`}
            id="navbarNavAltMarkup"
          >
            <div
              className={`navbar-nav flex-fill ${Styles.NavLinkExt}`}
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <Link href="/">
                  <a
                    className={`active ${Styles.Nav_social} ${Styles.NavLinkLink}`}
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </a>
                </Link>
              </div>
              <div className={Styles.NavLink}>
                <Link href="/contact">
                  <a
                    className={` ${Styles.NavLinkLink}`}
                    onMouseEnter={(e) => nav(e)}
                    onMouseLeave={(e) => navRemove(e)}
                  >
                    CONTACT
                  </a>
                </Link>

                {/* <CollectionsMenu
                  onMouseEnter={(e) => navEnter(e)}
                  onMouseLeave={(e) => navReset(e)}
                /> */}
              </div>
              <div className={Styles.NavLink}>
                <Link href="/collections">
                  <a
                    className={` ${Styles.NavLinkLink}`}
                    onMouseEnter={(e) => nav(e)}
                    onMouseLeave={(e) => navRemove(e)}
                  >
                    COLLECTIONS
                  </a>
                </Link>
                {/* <CollectionsMenu
                  onMouseEnter={(e) => navEnter(e)}
                  onMouseLeave={(e) => navReset(e)}
                /> */}
              </div>
              {/* <SocialHandle /> */}
            </div>
          </div>

          <div className={Styles.cartIcon}>
            <div className={Styles.NavLink}>
              <Link href="/cart">
                <a
                  className={`${Styles.Nav_social} ${Styles.NavLinkLink}`}
                  target="_blank"
                  href="#"
                >
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className={Styles.SvgCart}
                  />
                </a>
              </Link>

              <div className={Styles.cartCount}>0</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
