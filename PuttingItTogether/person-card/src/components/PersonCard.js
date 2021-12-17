import React, {Component} from 'react';

class PersonCard extends Component {
  constructor(props){
    super(props);
     this.state = {
       age: this.props.age
     };
    }

  
  render() {
    const {age} = this.state
    return (<div>
              <h1>{this.props.lastName}, {this.props.firstName}</h1>
              <div>
                <p1>Age: {age} </p1>
              </div>
              <div>
                <p1>Hair Color: {this.props.hairColor}</p1>
              </div>
              <button onClick={() =>{this.setState({age: this.state.age +=1})}}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
          </div>
    )
  }


}

export default PersonCard;