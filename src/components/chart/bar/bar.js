import React from "react"
import {
    BarChart as BarRecharts,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from "recharts"
import styles from "./bar.module.css"

function BarChart({ data, metadata }) {
    return (
        <ResponsiveContainer width="100%" height="80%">
            <BarRecharts data={data} barGap={8}>
                <CartesianGrid strokeDasharray="5 5" vertical={false} />
                <XAxis />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "#E60000",
                    }}
                    itemStyle={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "bold",
                        textAlign: "center",
                        margin: "8px 4px",
                    }}
                    labelStyle={{
                        display: "none",
                    }}
                    formatter={(value, name, props) => [
                        name.includes("kg") ? `${value}kg` : `${value}kcal`,
                        "",
                    ]}
                    separator=""
                    labelFormatter={(label) => `ok`}
                />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize={10}
                />
                {metadata.yAxis.map((element, index) => {
                    return (
                        <YAxis
                            key={index}
                            yAxisId={element.position}
                            dataKey={element.key}
                            orientation={element.position}
                            domain={["dataMin - 4", "dataMax + 4"]}
                            hide={element.hide}
                            tickLine={false}
                            width={30}
                            axisLine={false}
                        />
                    )
                })}

                {metadata.yAxis.map((element, index) => {
                    return (
                        <Bar
                            maxBarSize={1}
                            barSize={10}
                            key={index}
                            dataKey={element.key}
                            fill={element.color}
                            yAxisId={element.position}
                            name={element.name}
                            radius={[10, 10, 0, 0]}
                        />
                    )
                })}
            </BarRecharts>
        </ResponsiveContainer>
    )
}

export default BarChart
