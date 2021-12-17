import React, {Component} from 'react';

class PersonCard extends Component {

  
  render() {
    const {firstName, lastName, age, hairColor} = this.props;
    return (<div>
              <h1>{lastName}, {firstName}</h1>
              <div>
                <p1>Age: {age} </p1>
              </div>
              <div>
                <p1>Hair Color: {hairColor}</p1>
              </div>
          </div>
    )
  }


}

export default PersonCard;