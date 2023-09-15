import Header from "./header/header"
import styles from "./dashboard.module.css"
import useApi from "../../hooks/useApi"
import { useEffect } from "react"

const Dashboard = () => {
    const userId = 12
    const data = useApi(userId, "activity-keys")

    useEffect(() => {
        console.log("test", data)
    }, [data])

    return (
        <div className={styles.container}>
            <Header userId={userId} />
        </div>
    )
}

export default Dashboard
