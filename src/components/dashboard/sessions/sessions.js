import React from "react"
import LineChart from "../../chart/line/line"
import styles from "./sessions.module.css"

function Sessions({ data }) {
  const { sessions } = data

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
