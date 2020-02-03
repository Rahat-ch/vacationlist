import React, { useContext } from 'react';
import { VacationContext } from '../../contexts/VacationContext';
import styles from './index.module.css';

const VacationDetails = ({ vacation }) => {
  const { dispatch } = useContext(VacationContext);
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_VISITED', id: vacation.id })
  }
  console.log(styles)
  return (
    <li className={styles.location}>
      <div className={styles.locationWrapper}>
        <div className={styles.destination}> {vacation.location}</div>
        <button className={styles.close}
          onClick={() => dispatch({ type: 'REMOVE_VACATION', id: vacation.id })}>
          X
        </button>
      </div>
      {vacation.visited ?
        <button className={styles.visited} onClick={() => handleClick()}>Visited </button>
        :
        <button className={styles.visited} onClick={() => handleClick()}>Not Visited </button>
      }
    </li>
  )
}

export default VacationDetails