import React, { useState } from 'react';
import Exercise from './Exercise.js';

function test({ exercises, onDelete, onEdit }) {

   
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Units</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => <Exercise exercise={exercise}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        key={i} />
                    )}
                </tbody>
            </table>
        
        <form className="input-form"   >
            <input  type="text" id="name" />
            <input type="text" id="reps" />
            <input type="text" id="weight" />
            <input type="text" id="date"/>
            <button type="submit">Submit</button>
        </form>
        </div>
        
        
    );
}

export default test;
