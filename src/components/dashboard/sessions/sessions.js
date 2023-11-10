import React from "react"
import LineChart from "../../chart/line/line"
import styles from "./sessions.module.css"

function Sessions({ data }) {
  const { sessions } = data

  return (
    <div className={styles.container}>
      <div className={styles.content}>{sessions && <LineChart data={sessions} />}</div>
    </div>
  )
}

export default Sessions
