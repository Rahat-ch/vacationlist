import React, { useContext, useState } from 'react';
import { VacationContext } from '../../contexts/VacationContext';
import styles from './index.module.css';

const VacationForm = () => {
  const { dispatch } = useContext(VacationContext);
  const [location, setLocation] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_VACATION', vacation: {
        location,
        visited: false,
      }
    })
    setLocation('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <p>Enter a location and toggle the blue buttons to keep track of where you have visited!</p>
        <input
          className={styles.textArea}
          type="text"
          placeholder="enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br />
        <br />
        <input className={styles.submit} type="submit" value="add location" />
      </div>
    </form>
  )
}

export default VacationForm;
