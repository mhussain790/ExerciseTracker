import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [units, setUnits] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, units, date };
        console.log(newExercise);
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Add an exercise:</h2>
            <input type="text" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Enter reps here" value={reps} onChange={e => setReps(e.target.value)} />
            <input type="number" placeholder="Enter weight here" value={weight} onChange={e => setWeight(e.target.value)} />
            {/* <input type="text" placeholder="Enter units here" value={units} onChange={e => setUnits(e.target.value)} /> */}
            <select id="units" value={units} onChange={e => setUnits(e.target.value)} >
                <option selected disabled hidden style={{ display: 'none' }} value=''></option>
                <option value="kgs" selected>kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input type="text" placeholder="Enter date here" value={date} onChange={e => setDate(e.target.value)} />
            <button onClick={addExercise}>Add</button>
        </div>
    );
}

export default AddExercisePage;