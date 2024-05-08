import {useState} from 'react'
import Calendar from './calendar';


function Home() {

    
    const [workoutlist, setWorkoutList] = useState([{workout: ''}])
    console.log("workout list", workoutlist)

    const addWorkout = () => {
        setWorkoutList([...workoutlist, {workout: ""}])
    }

    const removeWorkout = (index) =>{
        const list = [...workoutlist]
        list.splice(index, 1)
        setWorkoutList(list)
    }

    const handleInputChange = (e, index) => {
        const {name, value} = e.target 
        const list = [...workoutlist]
        list[index][name] = value;
        setWorkoutList(list)
    }

  return (
    <div className="card">
        <form className="workout-form">
            <h2>Date:</h2>
                <input></input>
            <h2>Day:</h2>
            <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>

                </select>
            <h2>Muscle Group:</h2>
                <select>
                    <option>Legs</option>
                    <option>Arms</option>
                    <option>Shoulder</option>
                    <option>Chest</option>
                    <option>Back</option>
                    <option>Abs</option>

                </select>
            <h2>Workouts:</h2>
            {workoutlist.map((singleWorkout, index) => (
            <div key={index} className="workouts">
                <input
                id='workout'
                name='workout'
                type='text'
                value={singleWorkout.workout}
                onChange={(e) => handleInputChange(e, index)}
                ></input>
                {workoutlist.length - 1 === index && workoutlist.length < 5 &&
                (
                <button onClick={addWorkout}>Add</button>
                )}
                {workoutlist.length > 1 && ( 
                <button onClick={()=>removeWorkout(index)}>Remove</button>
                )}

                <br></br>

            </div>
            ))}
            <h2>Notes:</h2>
                <input></input>
        </form>
    </div>
  );
}

export default Home;