import React, {useState} from 'react';

const PersonCard = (props) => {
    const [newAge, setNewAge] = useState(props.age);

    return(
            <div>
                <h1>{props.name}</h1>
                <p>Age: {newAge}</p>
                <p>Hair Color: {props.haircolor}</p>
                <button onClick={ (event) => setNewAge(newAge + 1)}>Birthday Button for {props.name}</button>
            </div>
    )
}

export default PersonCard;