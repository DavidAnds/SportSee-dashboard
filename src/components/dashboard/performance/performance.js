import React from "react"
import RadarChart from "../../chart/radar/radar"
import styles from "./performance.module.css"

function Performance({ data }) {
  const { data: dataPerf } = data

  return (
    <div className={styles.container}>
      <div className={styles.content}>{dataPerf && <RadarChart data={dataPerf} />}</div>
    </div>
  )
}

export default Performance
