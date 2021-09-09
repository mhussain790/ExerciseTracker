import * as exercises from './exercise_model.mjs';
import express from 'express';

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.units, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/exercises/:_id', (req, res) => {
    const exerciseID = req.params._id;

    exercises.findExerciseById(exerciseID)
        .then(exercise => {
            if (exercise != null) {
                res.status(200).json(exercise)
            } else {
                res.status(500).json({
                    Error: 'Resource not found'
                });
            }
            
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request Failed' });
        });
});

app.get('/exercises', (req, res) => {
    let filter = {};
    
    if (req.query.name != undefined) {
        filter = { name: req.query.name };
    }

    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request Failed' });
        });
});

app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.units, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, units: req.body.units, date: req.body.date })
            } else {
                res.status(500).json({ Error: 'Resource Not Found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request Failed' });
        });
});

app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(500).json({ Error: 'Request Failed' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request Failed' });
        });
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
