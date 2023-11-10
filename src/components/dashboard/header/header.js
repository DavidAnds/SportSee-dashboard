import styles from "./header.module.css"

const Header = ({ data }) => {
  const { userInfos } = data
  return (
    <div className={styles.container}>
      {userInfos && (
        <h1 className={styles.title}>
          Bonjour <span className={styles.titleSpan}>{userInfos.firstName}</span>
        </h1>
      )}
      <p className={styles.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Header
