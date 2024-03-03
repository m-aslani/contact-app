
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p><a href="#">web site</a> | this is a simple contact app</p>
    </div>
  )
}

export default Header