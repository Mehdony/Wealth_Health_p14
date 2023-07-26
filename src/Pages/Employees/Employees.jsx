import { useContext } from 'react';
// import styles from './Employees.module.css'
import { Datablify } from 'datablify'
import { usersListContext } from "../../Context/userContext";
import styles from './Employees.module.css'

const Employees = () => {
 
  // on récupèr la liste des employés du contexte
  const { usersList } = useContext(usersListContext);

  // on crée les catégories pour datablify
  const categories = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Start Date',
    'Department',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  return (
    <div className={styles.employeeContainer}>
      {/* on passe la liste des employés et les catégories à datablify */}
      <Datablify
      data={usersList}
      categories={categories}
      headColor={'white'}
      titleHeadColor={'black'}
      />
    </div>
  )
}

export default Employees