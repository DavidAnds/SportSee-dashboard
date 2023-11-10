import styles from "./header.module.css"

const Header = ({ data }) => {
  const { userInfos, todayScore } = data
  return (
    <div className={styles.container}>
      {userInfos && (
        <h1 className={styles.title}>
          Bonjour <span className={styles.titleSpan}>{userInfos.firstName}</span>
        </h1>
      )}
      {todayScore > 0 ? (
        <p className={styles.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      ) : (
        <p className={styles.subtitle}>Vous n'avez pas encore atteint votre objectif. Bon courage!</p>
      )}
    </div>
  )
}

export default Header
