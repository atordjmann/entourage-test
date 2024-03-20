import Image from "next/image";
import styles from "../styles/layout.module.css";
export const Error = () => {
    return (
        <div className={styles.errorImg}>
            <Image src="/dog-confused.gif" alt="logo" width="300" height="300" />
        </div>
    )
}  