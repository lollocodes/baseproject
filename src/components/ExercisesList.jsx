import { useEffect, useState } from 'react';
import axios from 'axios';

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  const muscle = 'biceps'; // Example muscle parameter
  const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

  useEffect(() => {
    // Define the request config including headers
    const config = {
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    };

    // Make a GET request using Axios
    axios(config)
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => {
        console.error('Error fetching exercises:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exercises List</h1>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h2>{exercise.name}</h2>
            <p>Type: {exercise.type}</p>
            <p>Muscle: {exercise.muscle}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Difficulty: {exercise.difficulty}</p>
            <p>Instructions: {exercise.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExercisesList;
