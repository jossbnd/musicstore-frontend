import styles from '../styles/Product.module.css';

import Button from './Button';

function Product(style, name, description) {
    return (
        <div className={styles[style]}>
            <h6 className={styles.h6}>{name}</h6>
            <h2 className={styles.h2}>{description}</h2>
            {Button("black", "DISCOVER")}
        </div>
    )
}

export default Product;