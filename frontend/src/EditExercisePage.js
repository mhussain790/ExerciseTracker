import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [units, setUnits] = useState(exerciseToEdit.units);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, units, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
            {/* <input type="text" value={units} onChange={e => setUnits(e.target.value)} /> */}
            <select id="units" value={units} onChange={e => setUnits(e.target.value)} >
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input type="text" value={name} onChange={e => setDate(e.target.value)} />
            <button onClick={editExercise}>Save</button>
        </div>
    );
}
 
export default EditExercisePage;
