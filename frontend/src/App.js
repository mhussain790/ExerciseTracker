import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.js';
import EditExercisePage from './EditExercisePage.js';
import AddExercisePage from './AddExercisePage';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          
          <Route path="/" exact>
            <HomePage setExercisetoEdit={setExerciseToEdit} />
          </Route>

          <Route path='/add-exercise' component={AddExercisePage} />
          
          <Route path='/edit-exercise'>
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>

          
          

        </div>
      </Router>
    </div>
  );
}

export default App;
