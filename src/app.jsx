import React from 'react';
import Navigation from './components/Navigation';
import LoginLogoutButton from './components/LoginLogoutButton';
import StudyOperations from './components/StudyOperations';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = ({match: {params}}) => (
  <div className='App'>
    <div>
      <h1>Espresso Study tool</h1>
      <StudyOperations patientStudyId={params.patientStudyId} />
      <h3>login/logout</h3>
      <div><LoginLogoutButton /></div>
    </div>
  </div>
);

export default App;
