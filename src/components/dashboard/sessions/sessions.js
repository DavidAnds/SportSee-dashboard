import React from "react"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"
import LineChart from "../../chart/line/line"
import styles from "./sessions.module.css"

function Sessions({ userId }) {
    const { sessions } =
        useApi(userId, "average-sessions") ||
        getMockData(12, "average-sessions")
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {sessions && <LineChart data={sessions} />}
            </div>
        </div>
    )
}

export default Sessions
