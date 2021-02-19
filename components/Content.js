import { motion } from "framer-motion";
import Image from "next/image";
import Styles from "../styles/Content.module.css";
import { BtnExclusive } from "./Button";

const Content = () => {
  const images = [
    {
      large: "hoodiestylebrown.png",
      featured: "hoodiestylered.png",
      description:
        "Afrotrap red &amp; black with white color hoodie cap. Made with 100% cotton, high quality stitching",
      slug: "define your true style",
    },
    {
      large: "hoodiestyleblack.png",
      featured: "hoodiestyleyellow.png",
      description:
        "Afrotrap yellow &amp; green with white color hoodie cap. Made with 100% cotton, high quality stitching",
      slug: "define your true color",
    },
  ];
  return (
    <div className={Styles.Container}>
      {images.map((image, index) => {
        return (
          <div className={Styles.ContentContainer}>
            <div style={{ display: "block" }}>
              <div className={Styles.ContentLarge}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={Styles.Motion}
                >
                  <Image
                    src={`/${image.large}`}
                    alt="brownhoodie"
                    width="700"
                    height="500"
                    key={index}
                  />
                </motion.div>
              </div>

              <p className={Styles.description}>{image.description}</p>
            </div>
            <div
              className={`d-flex flex-column justify-content-between ${Styles.ContentFeatured}`}
            >
              <h1 className="text-capitalize">{image.slug + "..."}</h1>
              <BtnExclusive></BtnExclusive>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={`/${image.featured}`}
                    alt="brownhoodie"
                    width="400"
                    height="270"
                    key={index}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
