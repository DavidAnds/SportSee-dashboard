import React from "react"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"
import LineChart from "../../chart/line/line"
import styles from "./sessions.module.css"

function Sessions({ userId }) {
  const { sessions } = useApi(userId, "average-sessions") || getMockData(userId, "average-sessions")

  const day = ["L", "M", "M", "J", "V", "S", "D"]
  const dataFormatted =
    sessions &&
    sessions.map((element) => {
      return {
        sessionLength: element.sessionLength,
        day: day[element.day - 1],
      }
    })

  return (
    <div className={styles.container}>
      <div className={styles.content}>{sessions && <LineChart data={dataFormatted} />}</div>
    </div>
  )
}

export default Sessions
