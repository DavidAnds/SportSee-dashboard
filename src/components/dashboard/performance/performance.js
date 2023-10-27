import React from "react"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"
import RadarChart from "../../chart/radar/radar"
import styles from "./performance.module.css"

function Performance({ userId }) {
  const { data, kind } = useApi(userId, "performance") || getMockData(12, "performance")

  const dataFormatted =
    data &&
    kind &&
    data.map((element, index) => {
      return {
        ...element,
        kind: kind[index + 1],
      }
    })

  return (
    <div className={styles.container}>
      <div className={styles.content}>{data && <RadarChart data={dataFormatted} />}</div>
    </div>
  )
}

export default Performance
