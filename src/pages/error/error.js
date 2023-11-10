import { useLocation } from "react-router-dom"
import styles from "./styles.module.css"

function ErrorPage() {
  const location = useLocation()

  return (
    <div id="error-page" className={styles.container}>
      <h1 className={styles.status}>Error {location.state ? location.state.error.status : "404"}</h1>
      <p className={styles.text}>{location.state ? location.state.error.message : "Sorry, an unexpected error has occurred."}</p>
      <p className={styles.message}>
        <i>{location.state ? location.state.error.statusText : "Not found"}</i>
      </p>
    </div>
  )
}

export default ErrorPage
