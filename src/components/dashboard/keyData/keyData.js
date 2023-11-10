import React from "react"
import CardUI from "../../cardUI/cardUI"
import caloriesIcon from "./calories-icon.png"
import proteinIcon from "./protein-icon.png"
import fatIcon from "./fat-icon.png"
import carbsIcon from "./carbs-icon.png"
import styles from "./keyData.module.css"

function KeyData({ data }) {
  const { keyData } = data

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
