import Header from "./header/header"
import styles from "./dashboard.module.css"
import KeyData from "./keyData/keyData"
import Activity from "./activity/activity"
import Sessions from "./sessions/sessions"
import Performance from "./performance/performance"
import Score from "./score/score"

const Dashboard = () => {
  const userId = 12

  return (
    <div className={styles.container}>
      <Header userId={userId} />
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
        <div className={styles.contentRight}>
          <KeyData userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
