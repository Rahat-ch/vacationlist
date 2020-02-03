import React, { useContext } from 'react';
import { VacationContext } from '../../contexts/VacationContext';
import VacationDetails from '../VacationDetails';

const VacationList = () => {
  const { vacations } = useContext(VacationContext);
  return (
    <ul>
      {vacations.map((vacation) =>
        <VacationDetails vacation={vacation} key={vacation.id} />)}
    </ul>
  )
}

export default VacationList;
