import React, {useState} from 'react';

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 

    return (
        <form>
            <div>
                <label>First name: </label>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}    value={firstName}/>
            </div>
            <div>
                <label>Last name: </label>
                <input type="text"  onChange={(e) => setLastName(e.target.value)}    value={lastName}/>
            </div>
            <div>
                <label>E-mail: </label>
                <input type="text"  onChange={(e) => setEmail(e.target.value)}    value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}    value={password}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password"  onChange={(e) => setConfirmPassword(e.target.value)}    value={confirmPassword}/>
            </div>   
            <h4>Your Form Data</h4>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName}</p>
            <p>E-mail: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword} </p>
        </form>       
    );
}

export default HookForm;