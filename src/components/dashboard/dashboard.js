import Header from "./header/header"
import styles from "./dashboard.module.css"
import KeyData from "./keyData/keyData"
import Activity from "./activity/activity"
import Sessions from "./sessions/sessions"
import Performance from "./performance/performance"
import Score from "./score/score"
import { useParams } from "react-router"
import useData from "../../hooks/useData"

const Dashboard = () => {
  const { id, mock } = useParams()
  const userId = parseInt(id)

  const { user, activity, averageSessions, performance } = useData(userId, mock)

  return (
    <div className={styles.container}>
      {user && activity && averageSessions && performance ? (
        <>
          <Header data={user} />
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <div className={styles.activity}>
                <Activity data={activity} />
              </div>
              <div className={styles.sessionsInfo}>
                <Sessions data={averageSessions} />
                <Performance data={performance} />
                <Score data={user} />
              </div>
            </div>
            <div className={styles.contentRight}>
              <KeyData data={user} />
            </div>
          </div>
        </>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  )
}

export default Dashboard
