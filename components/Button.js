import styles from '../styles/Button.module.css';

function Button(props) {
    return (
        <button className={styles[props.style]}>{props.text}</button>
    )
}

export default Button;