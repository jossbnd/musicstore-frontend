import styles from '../styles/Button.module.css';

function Button(style, text) {
    return (
        <button className={styles[style]}>{text}</button>
    )
}

export default Button;