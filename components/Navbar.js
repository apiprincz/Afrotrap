import Link from "next/link";
import SocialHandle from "./SocialHandle";
import Styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`row d-flex align-items-center ${Styles.Navbar}`}>
      <nav className="navbar navbar-expand-sm navbar-light col-md-8 ">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div
              className="navbar-nav flex-fill"
              style={{ justifyContent: "space-between" }}
            >
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  HOME
                </a>
              </Link>
              <Link href="/contact">
                <a className="nav-link">CONTACT</a>
              </Link>
              <Link href="/collections">
                <a className="nav-link">COLLECTIONS</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <SocialHandle></SocialHandle>
    </div>
  );
};

export default Navbar;
