import React from "react"
import CardUI from "../../cardUI/cardUI"
import caloriesIcon from "./calories-icon.png"
import proteinIcon from "./protein-icon.png"
import fatIcon from "./fat-icon.png"
import carbsIcon from "./carbs-icon.png"
import styles from "./keyData.module.css"

function KeyData({ data }) {
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data

    return (
        <div className={styles.container}>
            <CardUI
                number={calorieCount}
                name={"Calories"}
                icon={caloriesIcon}
            />
            <CardUI
                number={proteinCount}
                name={"Proteines"}
                icon={proteinIcon}
            />
            <CardUI
                number={carbohydrateCount}
                name={"Glucides"}
                icon={carbsIcon}
            />
            <CardUI number={lipidCount} name={"Lipides"} icon={fatIcon} />
        </div>
    )
}

export default KeyData
