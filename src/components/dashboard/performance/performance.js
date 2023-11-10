import React from "react"
import RadarChart from "../../chart/radar/radar"
import styles from "./performance.module.css"

function Performance({ data }) {
  const { data: dataPerf, kind } = data

  const dataFormatted =
    dataPerf &&
    kind &&
    dataPerf.map((element, index) => {
      return {
        ...element,
        kind: kind[index + 1],
      }
    })

  return (
    <div className={styles.container}>
      <div className={styles.content}>{dataPerf && <RadarChart data={dataFormatted} />}</div>
    </div>
  )
}

export default Performance
