import NavBar from "../components/navBar/navBar"
import SideBar from "../components/sideBar/sideBar"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <SideBar />
                <div className={styles.main}>{children}</div>
            </div>
        </div>
    )
}

export default Layout
