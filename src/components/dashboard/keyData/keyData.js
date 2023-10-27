import React from "react"
import CardUI from "../../cardUI/cardUI"
import caloriesIcon from "./calories-icon.png"
import proteinIcon from "./protein-icon.png"
import fatIcon from "./fat-icon.png"
import carbsIcon from "./carbs-icon.png"
import styles from "./keyData.module.css"
import useApi from "../../../hooks/useApi"
import getMockData from "../../../data/getMockData"

function KeyData({ userId }) {
  const { keyData } = useApi(userId) || getMockData(12)

  return (
    <div className={styles.container}>
      {keyData && (
        <>
          <CardUI number={keyData.calorieCount} name={"Calories"} icon={caloriesIcon} />
          <CardUI number={keyData.proteinCount} name={"Proteines"} icon={proteinIcon} />
          <CardUI number={keyData.carbohydrateCount} name={"Glucides"} icon={carbsIcon} />
          <CardUI number={keyData.lipidCount} name={"Lipides"} icon={fatIcon} />
        </>
      )}
    </div>
  )
}

export default KeyData
