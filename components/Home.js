import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faLocationDot, faBagShopping } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import NewProduct from './NewProduct';
import Product from './Product';


function Home() {

  const products = [
    {
    style: "phantom1",
    name: "PHANTOM I White",
    description: "A class of its own."
    },
    {
    style: "phantom2",
    name: "PHANTOM II Gold",
    description: "Pure sound."
    },
    {
    style: "phantom3",
    name: "PHANTOM II Black",
    description: "Deeply nomadic."
    },
    {
      style: "phantom4",
      name: "PHANTOM II White",
      description: "Intensively immersive."
    },
  ];

  const productCarts = products.map((product, i) => {
    return (<Product style={product.style} name={product.name} description={product.description} key={i+4} />);
  });

  
  return (
    <div>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerBar}>
            <FontAwesomeIcon className={styles.logo} icon={faBars} />
            <div className={styles.headerBarName}>MUSIC STORE</div>
            <div className={styles.headerLogos}>
              <FontAwesomeIcon className={styles.logo} icon={faUser} />
              <FontAwesomeIcon className={styles.logo} icon={faLocationDot} />
              <FontAwesomeIcon className={styles.logo} icon={faBagShopping} />
            </div>
          </div>
          <div className={styles.headerFoot}>
            <div className={styles.headerFootDescription}>
              <h4 className={styles.h4}>PHANTOM</h4>
              <h1 className={styles.h1}>IMPLOSIVE SOUND</h1>
            </div>
            <div className={styles.headerButtons}>
              <Button style="white" text="DISCOVER" key="0" />
              <Button style="transparent" text="BUY" key="1"/>
            </div>
          </div>
        </header>
        <NewProduct key="3" />
        <div className={styles.productsContainer}>
          {productCarts}
        </div>
        <footer className={styles.footer}>
          <span className={styles.span}>ABOUT</span>
          <span className={styles.span}>CONTACT</span>
          <span className={styles.span}>SUPPORT</span>
          <span className={styles.span}>STORES</span>
        </footer>
      </main>
    </div>
  );
}

export default Home;
