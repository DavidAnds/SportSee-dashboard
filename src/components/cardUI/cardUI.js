import React from "react"
import styles from "./cardUI.module.css"

const CardUI = ({ number, unit = "g", name, icon }) => {
    const formatNumber = (number) => {
        // regex to add a comma every 3 digits
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const numberFormated = formatNumber(number)

    return (
        <div className={styles.container}>
            <img src={icon} alt="icon" className={styles.icon} />
            <div className={styles.textContainer}>
                <p className={styles.number}>
                    {numberFormated}
                    {unit}
                </p>
                <p className={styles.name}>{name}</p>
            </div>
        </div>
    )
}

export default CardUI
