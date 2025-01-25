import React from 'react';
import styles from './Footer.module.css';
import payment from '../../images/payment.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCategory}>
        <div className="container">
          <h2 className={styles.footerCategoryTitle}>Brand directory</h2>

          <div className={styles.footerCategoryBox}>
            <h3 className={styles.categoryBoxTitle}>Fashion:</h3>
            <a href="#" className={styles.footerCategoryLink}>T-shirt</a>
            <a href="#" className={styles.footerCategoryLink}>Shirts</a>
            <a href="#" className={styles.footerCategoryLink}>Shorts & Jeans</a>
            <a href="#" className={styles.footerCategoryLink}>Jacket</a>
            <a href="#" className={styles.footerCategoryLink}>Dress & Frock</a>
            <a href="#" className={styles.footerCategoryLink}>Innerwear</a>
            <a href="#" className={styles.footerCategoryLink}>Hosiery</a>
          </div>

          <div className={styles.footerCategoryBox}>
            <h3 className={styles.categoryBoxTitle}>Footwear:</h3>
            <a href="#" className={styles.footerCategoryLink}>Sport</a>
            <a href="#" className={styles.footerCategoryLink}>Formal</a>
            <a href="#" className={styles.footerCategoryLink}>Boots</a>
            <a href="#" className={styles.footerCategoryLink}>Casual</a>
            <a href="#" className={styles.footerCategoryLink}>Cowboy Shoes</a>
            <a href="#" className={styles.footerCategoryLink}>Safety Shoes</a>
            <a href="#" className={styles.footerCategoryLink}>Party Wear Shoes</a>
            <a href="#" className={styles.footerCategoryLink}>Branded</a>
            <a href="#" className={styles.footerCategoryLink}>Firstcopy</a>
            <a href="#" className={styles.footerCategoryLink}>Long Shoes</a>
          </div>

          <div className={styles.footerCategoryBox}>
            <h3 className={styles.categoryBoxTitle}>Jewellery:</h3>
            <a href="#" className={styles.footerCategoryLink}>Necklace</a>
            <a href="#" className={styles.footerCategoryLink}>Earrings</a>
            <a href="#" className={styles.footerCategoryLink}>Couple Rings</a>
            <a href="#" className={styles.footerCategoryLink}>Pendants</a>
            <a href="#" className={styles.footerCategoryLink}>Crystal</a>
            <a href="#" className={styles.footerCategoryLink}>Bangles</a>
            <a href="#" className={styles.footerCategoryLink}>Bracelets</a>
            <a href="#" className={styles.footerCategoryLink}>Nosepin</a>
            <a href="#" className={styles.footerCategoryLink}>Chain</a>
          </div>

          <div className={styles.footerCategoryBox}>
            <h3 className={styles.categoryBoxTitle}>Cosmetics:</h3>
            <a href="#" className={styles.footerCategoryLink}>Shampoo</a>
            <a href="#" className={styles.footerCategoryLink}>Bodywash</a>
            <a href="#" className={styles.footerCategoryLink}>Facewash</a>
            <a href="#" className={styles.footerCategoryLink}>Makeup Kit</a>
            <a href="#" className={styles.footerCategoryLink}>Liner</a>
            <a href="#" className={styles.footerCategoryLink}>Lipstick</a>
            <a href="#" className={styles.footerCategoryLink}>Perfume</a>
            <a href="#" className={styles.footerCategoryLink}>Body Soap</a>
            <a href="#" className={styles.footerCategoryLink}>Scrub</a>
            <a href="#" className={styles.footerCategoryLink}>Hair Gel</a>
            <a href="#" className={styles.footerCategoryLink}>Hair Colors</a>
            <a href="#" className={styles.footerCategoryLink}>Hair Dye</a>
            <a href="#" className={styles.footerCategoryLink}>Sunscreen</a>
            <a href="#" className={styles.footerCategoryLink}>Skin Lotion</a>
          </div>
        </div>
      </div>
<hr />
      <div className={styles.footerNav}>
        <div className={styles.foot_sec_container}>
          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Popular Categories</h2>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Fashion</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Electronic</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Cosmetic</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Health</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Watches</a>
            </li>
          </ul>

          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Products</h2>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Prices Drop</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>New Products</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Best Sales</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Contact Us</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Sitemap</a>
            </li>
          </ul>

          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Our Company</h2>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Delivery</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Legal Notice</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Terms and Conditions</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>About Us</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Secure Payment</a>
            </li>
          </ul>

          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Services</h2>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Prices Drop</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>New Products</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Best Sales</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Contact Us</a>
            </li>
            <li className={styles.footerNavItem}>
              <a href="#" className={styles.footerNavLink}>Sitemap</a>
            </li>
          </ul>

          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Contact</h2>
            </li>
            <li className={`${styles.footerNavItem} ${styles.flex}`}>
              <div className={styles.iconBox}>
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <address className={styles.content}>
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className={`${styles.footerNavItem} ${styles.flex}`}>
              <div className={styles.iconBox}>
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <a href="tel:+607936-8058" className={styles.footerNavLink}>(607) 936-8058</a>
            </li>
            <li className={`${styles.footerNavItem} ${styles.flex}`}>
              <div className={styles.iconBox}>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <a href="mailto:example@gmail.com" className={styles.footerNavLink}>example@gmail.com</a>
            </li>
          </ul>

          
        </div>
        {/* <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>Follow Us</h2>
            </li>
            <li>
              <ul className={styles.socialLink}>
                <li className={styles.footerNavItem}>
                  <a href="#" className={styles.footerNavLink}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li className={styles.footerNavItem}>
                  <a href="#" className={styles.footerNavLink}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li className={styles.footerNavItem}>
                  <a href="#" className={styles.footerNavLink}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li className={styles.footerNavItem}>
                  <a href="#" className={styles.footerNavLink}>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
      </div>

      <hr />
      <div className={styles.footerBottom}>
        <div className="container">
          <img src={payment} alt="Payment method" className={styles.paymentImg} />
          <p className={styles.copyright}>
            Copyright &copy; Anon all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
