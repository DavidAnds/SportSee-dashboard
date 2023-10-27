import React from "react"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"
import styles from "./score.module.css"
import RadialBarChart from "../../chart/radialBar/radialBar"

function Score({ userId }) {
  const { todayScore, score } = useApi(userId) || getMockData(userId)

  const dataFormatted =
    (todayScore && [
      {
        value: todayScore,
        kind: "score",
        fill: "red",
      },
    ]) ||
    (score && [
      {
        value: 1,
        kind: "score",
        fill: "red",
      },
    ])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {(todayScore || score) && <RadialBarChart data={dataFormatted} title="Score" score={(todayScore || score) * 100} />}
      </div>
    </div>
  )
}

export default Score
