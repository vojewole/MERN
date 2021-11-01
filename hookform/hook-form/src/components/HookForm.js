import React, {useState} from 'react';

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameCharacter, setNameCharacter] = useState(false);
    const [emailCharacter, setEmailCharacter] = useState(false);
    const [passwordCharacter, setPasswordCharacter] = useState(false);


    const firstNameCharacterCheck = (e) => {
        setFirstName(e.target.value);
        if (firstName.length < 2)
        {
            setNameCharacter(true);
        }
        else 
        {
            setNameCharacter(false);
        }
    }

    const lastNameCharacterCheck = (e) => {
        setLastName(e.target.value);
        if (lastName.length < 2)
        {
            setNameCharacter(true);
        }
        else 
        {
            setNameCharacter(false);
        }
    }

    const emailCharacterCheck = (e) => {
        setEmail(e.target.value);
        if (email.length < 5)
        {
            setEmailCharacter(true);
        }
        else 
        {
            setEmailCharacter(false);
        }
    }

    const passwordCharacterCheck = (e) => {
        setPassword(e.target.value);
        if (password.length < 8)
        {
            setPasswordCharacter(true);
        }
        else 
        {
            setPasswordCharacter(false);
        }
    }

    const confirmPasswordCharacterCheck = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmPassword.length < 8)
        {
            setPasswordCharacter(true);
        }
        else 
        {
            setPasswordCharacter(false);
        }
    }

    return (
        <form>
            <div>
                <label>First name: </label>
                <input type="text"  onChange={firstNameCharacterCheck}    value={firstName}/>
                {nameCharacter ?
                <p>First Name must be at least 2 characters</p>:
                <p></p>}
            </div>
            <div>
                <label>Last name: </label>
                <input type="text"  onChange={lastNameCharacterCheck}    value={lastName}/>
                {nameCharacter ?
                <p>Last Name must be at least 2 characters</p>:
                <p></p>}
            </div>
            <div>
                <label>E-mail: </label>
                <input type="text"  onChange={emailCharacterCheck}    value={email}/>
                {emailCharacter ?
                <p>E-mail must be at least 5 characters</p>:
                <p></p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={passwordCharacterCheck}    value={password}/>
                {passwordCharacter ?
                <p>Password must be at least 8 characters</p>:
                <p></p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password"  onChange={confirmPasswordCharacterCheck}    value={confirmPassword}/>
                {passwordCharacter ?
                <p>Passowrd must be at least 8 characters</p>:
                <p></p>}
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