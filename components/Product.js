import styles from '../styles/Product.module.css';

import Button from './Button';

function Product(props) {
    return (
        <div className={styles[props.style]}>
            <h6 className={styles.h6}>{props.name}</h6>
            <h2 className={styles.h2}>{props.description}</h2>
            <Button style="black" text="DISCOVER" />
        </div>
    )
}

export default Product;