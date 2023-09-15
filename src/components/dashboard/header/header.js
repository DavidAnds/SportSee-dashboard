import styles from "./header.module.css"
import useApi from "../../../hooks/useApi"
import { useEffect } from "react"

const Header = ({ userId }) => {
    const infos = useApi(userId, "infos")
    const score = useApi(userId, "today-score")

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Bonjour{" "}
                <span className={styles.titleSpan}>{infos.firstName}</span>
            </h1>
            {score > 0 ? (
                <p className={styles.subtitle}>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            ) : (
                <p className={styles.subtitle}>
                    Vous n'avez pas encore atteint votre objectif. Bon courage!
                </p>
            )}
        </div>
    )
}

export default Header
