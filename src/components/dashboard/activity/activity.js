import React from "react"
import BarChart from "../../chart/bar/bar"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"
import { useEffect, useState } from "react"
import styles from "./activity.module.css"

function Activity({ userId }) {
  const { sessions } = useApi(userId, "activity") || getMockData(userId, "activity")

  const metadata = {
    xAxis: "id",
    yAxis: [
      {
        key: "kilogram",
        color: "#282D30",
        unit: "g",
        position: "right",
        name: "Poids (kg)",
      },
      {
        key: "calories",
        color: "#E60000",
        unit: "kcal",
        position: "left",
        hide: true,
        name: "Calories brulé (kcal)",
      },
    ],
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Activité quotidienne</h2>
      {sessions && <BarChart data={sessions} metadata={metadata} />}
    </div>
  )
}

export default Activity
