import React from "react"
import styles from "./score.module.css"
import RadialBarChart from "../../chart/radialBar/radialBar"

function Score({ data }) {
  const { userScore } = data

  return (
    <div className={styles.container}>
      <div className={styles.content}>{userScore && <RadialBarChart data={userScore} title="Score" />}</div>
    </div>
  )
}

export default Score
