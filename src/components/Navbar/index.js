import React, { useContext } from 'react';
import { VacationContext } from '../../contexts/VacationContext';
import styles from './index.module.css';

const NavBar = () => {
  const { vacations } = useContext(VacationContext);
  const vacationsAdded = vacations.length > 0;
  const visited = vacations.filter(vacation => vacation.visited);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.header}>Vaction List</h1>
      {vacationsAdded ?
        <p>You have visited {visited.length}/{vacations.length} of your Vacation Locations.</p>
        :
        <p>Add Some Vacations to get started!</p>
      }
    </nav>
  )
}

export default NavBar