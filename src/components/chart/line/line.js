import React, { useEffect } from "react"
import {
    ResponsiveContainer,
    LineChart as ReLineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from "recharts"
import styles from "./line.module.css"

function CustomLegend() {
    return (
        <div className={styles.legendContainer}>
            <h3 className={styles.legend}>Durée moyenne des sessions</h3>
        </div>
    )
}

function LineChart({ data }) {
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    const dataFormatted = data.map((element) => {
        return {
            sessionLength: element.sessionLength,
            day: day[element.day - 1],
        }
    })

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ReLineChart data={dataFormatted} width={"100%"} height={"100%"}>
                <CartesianGrid
                    strokeDasharray="5 5"
                    vertical={false}
                    horizontal={false}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    dot={false}
                />
                <CartesianGrid />
                <Legend
                    content={<CustomLegend />}
                    align="center"
                    verticalAlign="top"
                />
                <XAxis
                    dataKey={"day"}
                    tickLine={false}
                    axisLine={false}
                    stroke="#FFF"
                />
                <YAxis
                    dataKey={"sessionLength"}
                    hide
                    domain={["dataMin - 20", "dataMax + 40"]}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "#FFF",
                    }}
                    itemStyle={{
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    labelStyle={{
                        display: "none",
                    }}
                    formatter={(value, name, props) => [`${value}min`, ""]}
                    separator=""
                />
            </ReLineChart>
        </ResponsiveContainer>
    )
}

export default LineChart
