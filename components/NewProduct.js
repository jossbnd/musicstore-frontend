import styles from '../styles/NewProduct.module.css';

import Button from './Button';

function NewProduct() {
    return (
        <div className={styles.container}>
            <h6 className={styles.h6}>LATEST LAUNCH</h6>
            <h2 className={styles.h2}>DIONE SOUNDBAR</h2>
            <img className={styles.img} src='../soundbar.png' />
            {Button("black", "DISCOVER")}
        </div>

    )
}

export default NewProduct;