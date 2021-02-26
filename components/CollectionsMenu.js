import React from "react";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";

const CollectionsMenu = (props) => {
  return (
    <div
      className={Styles.NavLinkContent}
      onMouseEnter={(e) => props.onMouseEnter(e)}
      onMouseLeave={(e) => props.onMouseLeave(e)}
    >
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link href="/collections/men">Men's Wears</Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link href="/collections/women">Women's Wears</Link>
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link href="/collections/others">Other</Link>
          <span className="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    </div>
  );
};

export default CollectionsMenu;
