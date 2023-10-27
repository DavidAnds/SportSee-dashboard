import React from "react"
import { useLayoutEffect, useRef, useState } from "react"
import { RadialBarChart as ReRadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"
import styles from "./radialBar.module.css"

function RadialBarChart({ data, title = "title", score }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  const heightResize = () => {
    const { current } = ref
    const { width } = current.getBoundingClientRect()
    setHeight(width)
  }

  useLayoutEffect(() => {
    heightResize()
    window.addEventListener("resize", heightResize)

    return () => {
      window.removeEventListener("resize", heightResize)
    }
  }, [])

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ReRadialBarChart data={data} width={"100%"} height={"100%"} innerRadius={"95%"} startAngle={90} barCategoryGap={0}>
          <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
          <RadialBar minAngle={15} dataKey={"value"} cornerRadius={50} />
        </ReRadialBarChart>
      </ResponsiveContainer>
      <div
        className={styles.center}
        ref={ref}
        style={{
          height: height,
        }}>
        <p className={styles.score}>{score}%</p>
        <p className={styles.text}>
          De votre <br /> objectif
        </p>
      </div>
    </>
  )
}

export default RadialBarChart
