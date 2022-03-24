import styles from "./Navigation.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${styles.categories} wrapper mx-auto my-xl`}>
        <div className={`${styles.info_card} flex-grow-1 br-m`}>
          <i className="fas fa-truck text-s"></i>
          &nbsp;&nbsp;Free Delivery above Rs. 499
        </div>
        <div className={`${styles.info_card} flex-grow-1 br-m`}>
          <i className="fas fa-book text-s"></i>
          &nbsp;&nbsp;More than 20,000 books
        </div>
        <div className={`${styles.info_card} flex-grow-1 br-m`}>
          <i className="fas fa-credit-card text-s"></i>
          &nbsp;&nbsp;Safe Payment Options
        </div>
      </div>

      <footer
        className={`wrapper ${styles.footer_container} p-m mx-auto my-l br-m`}
      >
        <section className={`${styles.footer_section}`}>
          <h6 className={`${styles.h6} h6`}>Quick Links</h6>
          <a className="link text-light" href="">
            <small className="py-xs">About Us</small>
          </a>
          <a className="link text-light" href="">
            <small className="py-xs">Terms of Service</small>
          </a>
          <a className="link text-light" href="">
            <small className="py-xs">Privacy Policy</small>
          </a>
          <a className="link text-light" href="">
            <small className="py-xs">Return Policy</small>
          </a>
          <a className="link text-light" href="">
            <small className="py-xs">Shipping Details</small>
          </a>
        </section>

        <section className={`${styles.footer_section}`}>
          <h6 className={`${styles.h6} h6`}>Stay in touch</h6>
          <a className="link text-light py-xs" href="https://twitter.com">
            <small>
              Twitter &nbsp;<i className="fab fa-twitter"></i>
            </small>
          </a>
          <a className="link text-light py-xs" href="https://instagram.com">
            <small>
              Instagram &nbsp;<i className="fab fa-instagram"></i>
            </small>
          </a>
          <a className="link text-light py-xs" href="https://facebook.com">
            <small>
              Facebook &nbsp;<i className="fab fa-facebook"></i>
            </small>
          </a>
        </section>

        <section className={`${styles.footer_section}`}>
          <h6 className={`${styles.h6} h6`}>Contact Us</h6>
          <small className="py-xs">E-mail: mail@mail.com</small>
          <small className="py-xs">Whatsapp: +91 8888888888</small>
        </section>
      </footer>
    </>
  );
};

export { Footer };
