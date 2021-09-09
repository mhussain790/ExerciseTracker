import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Table from '../../frontend/components/ExerciseList.js';
import Exercise from '../../frontend/components/Exercise.js';
import HomePage from './HomePage.js';
import EditExercisePage from './EditExercisePage';
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
          
          <Route path='/edit-exercise'>
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>

          <Route path="/add-movie" component={AddExercisePage} />
          

        </div>
      </Router>
    </div>
  );
}

export default App;
