import styles from "./sideBar.module.css"
import swim from "./icon-swim.png"
import bike from "./icon-bike.png"
import yoga from "./icon-yoga.png"
import muscu from "./icon-muscu.png"

const SideBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a className={styles.navLink} href="/">
                    <img src={yoga} alt="yoga icon" className={styles.icon} />
                </a>
                <a className={styles.navLink} href="/">
                    <img src={swim} alt="swim" className={styles.icon} />
                </a>
                <a className={styles.navLink} href="/">
                    <img src={bike} alt="bike icon" className={styles.icon} />
                </a>
                <a className={styles.navLink} href="/">
                    <img src={muscu} alt="muscu icon" className={styles.icon} />
                </a>
            </nav>
            <p className={styles.copyright}>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default SideBar
