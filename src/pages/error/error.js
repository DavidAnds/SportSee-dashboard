import { useRouteError } from "react-router-dom"
import styles from "./styles.module.css"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className={styles.container}>
      <h1 className={styles.status}>Error {error.status}</h1>
      <p className={styles.text}>Sorry, an unexpected error has occurred.</p>
      <p className={styles.message}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
