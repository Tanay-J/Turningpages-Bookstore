import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Banner = () => {
  return (
    <div className={`${styles.main_img_container} wrapper mx-auto my-m`}>
      <img
        className={`${styles.main_img} br-m`}
        src={process.env.PUBLIC_URL + "/assets/main-3.jpg"}
      />
      <div className={`${styles.main_img_text} text-left br-m`}>
        <h2 className={`${styles.banner_title} h1 text-white br-m`}>
          Turning Pages
        </h2>
        <p className={`${styles.banner_sub_title} text-xs text-white my-s`}>
          one stop shop for all your bibliophilic cravings
        </p>
        <Link className="link" to="/products">
          <button className="btn btn-primary my-m">Browse</button>
        </Link>
      </div>
      <p class={`${styles.main_img_text_bottom} text-black text-xxs`}>
        Free Delivery Above Rs. 499{" "}
      </p>
    </div>
  );
};

export { Banner };
