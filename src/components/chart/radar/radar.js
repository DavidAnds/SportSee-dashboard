import React from "react"
import { RadarChart as ReRadarChart, PolarGrid, Radar, ResponsiveContainer, PolarRadiusAxis, PolarAngleAxis } from "recharts"
import styles from "./radar.module.css"

function RadarChart({ data }) {
  return (
    <ResponsiveContainer width="95%" height="90%">
      <ReRadarChart data={data} width={"80%"} height={"80%"} className={styles.content}>
        <PolarGrid stroke="#fff" radialLines={false} />
        <Radar dataKey="value" stroke="rgba(255, 1, 1, 0.70);" fill="rgba(255, 1, 1, 0.70)" />
        <PolarAngleAxis dataKey="kind" axisLine={false} stroke="#fff" tickLine={false} tickSize={8} orient={10} />
        <PolarRadiusAxis domain={[0, "dataMax + 20"]} axisLine={false} tick={false} />
      </ReRadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChart
