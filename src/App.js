import React from 'react';
import VacataionContextProvider from './contexts/VacationContext';
import NavBar from './components/Navbar';
import VacationList from './components/VacationList';
import VacationForm from './components/VacationForm.js';
import styles from './App.module.css';

function App() {
  return (
    <VacataionContextProvider>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <NavBar />
        </div>
        <VacationList />
        <VacationForm />
      </div>
    </VacataionContextProvider>
  );
}

export default App;
