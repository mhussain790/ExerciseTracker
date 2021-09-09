import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ExerciseList from './components/ExerciseList.js';


function HomePage({ setExercisetoEdit }) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExercisetoEdit(exercise);
        history.push("/edit-exercise");
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <Link to="/add-exercise" class="add_text">Add an exercise</Link>
        </>
    );
}

export default HomePage;
