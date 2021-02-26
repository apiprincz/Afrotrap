import React from "react";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCartPlus);
const cart = icon({ prefix: "fas", iconName: "cart" });

const SocialHandle = () => {
  return (
    <>
      <Link href="#">
        <a className={Styles.Nav_social} target="_blank" href="#">
          <FontAwesomeIcon icon={["fab", "facebook"]} className={Styles.Svg} />
        </a>
      </Link>
      <Link href="#">
        <a className={Styles.Nav_social} target="_blank" href="#">
          <FontAwesomeIcon icon={["fab", "instagram"]} className={Styles.Svg} />
        </a>
      </Link>
      <Link href="#">
        <a className={Styles.Nav_social} target="_blank" href="#">
          <FontAwesomeIcon icon={["fab", "twitter"]} className={Styles.Svg} />
        </a>
      </Link>
      <Link href="#">
        <a className={Styles.Nav_social} target="_blank" href="#">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className={Styles.Svg} />
        </a>
      </Link>
    </>
  );
};

export default SocialHandle;
