import Header from "./header/header"
import styles from "./dashboard.module.css"
import KeyData from "./keyData/keyData"
import useApi from "../../hooks/useApi"
import getMockData from "../../data/getMockData"
import Activity from "./activity/activity"

const Dashboard = () => {
    const userId = 12
    const { keyData, userInfos, todayScore } = useApi(userId) || getMockData(12)

    return (
        <div className={styles.container}>
            {userInfos && (
                <Header userInfos={userInfos} todayScore={todayScore} />
            )}
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.activity}>
                        <Activity userId={userId} />
                    </div>
                </div>
                <div className={styles.contentRight}>
                    {keyData && <KeyData data={keyData} />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
