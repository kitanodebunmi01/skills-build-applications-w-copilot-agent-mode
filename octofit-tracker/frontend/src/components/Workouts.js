import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://laughing-space-couscous-q64w4pgx6w52gj6-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <div className="card-deck">
        {workouts.map(workout => (
          <div key={workout._id} className="card">
            <div className="card-body">
              <h5 className="card-title">{workout.name}</h5>
              <p className="card-text">{workout.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;