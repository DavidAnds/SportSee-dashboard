import styles from "./navBar.module.css"
import logo from "./logo.png"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logoIcon} />
                <p className={styles.logoText}>SportSee</p>
            </div>
            <nav className={styles.nav}>
                <a className={styles.navLink} href="/">
                    Accueil
                </a>
                <a className={styles.navLink} href="/">
                    Profil
                </a>
                <a className={styles.navLink} href="/">
                    Réglage
                </a>
                <a className={styles.navLink} href="/">
                    Communauté
                </a>
            </nav>
        </div>
    )
}

export default NavBar
