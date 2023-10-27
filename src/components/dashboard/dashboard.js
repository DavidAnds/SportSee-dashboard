import Header from "./header/header"
import styles from "./dashboard.module.css"
import KeyData from "./keyData/keyData"
import useApi from "../../hooks/useApi"
import getMockData from "../../data/getMockData"
import Activity from "./activity/activity"
import Sessions from "./sessions/sessions"
import Performance from "./performance/performance"
import Score from "./score/score"

const Dashboard = () => {
  const userId = 12
  const { keyData, userInfos, todayScore } = useApi(userId) || getMockData(12)

  return (
    <div className={styles.container}>
      {userInfos && <Header userInfos={userInfos} todayScore={todayScore} />}
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.activity}>
            <Activity userId={userId} />
          </div>
          <div className={styles.sessionsInfo}>
            <Sessions userId={userId} />
            <Performance userId={userId} />
            <Score userId={userId} />
          </div>
        </div>
        <div className={styles.contentRight}>{keyData && <KeyData data={keyData} />}</div>
      </div>
    </div>
  )
}

export default Dashboard
