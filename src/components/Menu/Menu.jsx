import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <Link className={styles.link} to='/employees'>
                View Current Employees
        </Link>
    </div>
  )
}

export default Menu