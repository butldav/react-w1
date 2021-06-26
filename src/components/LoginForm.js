import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div id="loginForm">
                <h3>Log In</h3>
                <form>
                    <label for="userNameInput">Username:</label>
                    <input type="text" name="userNameInput" id="userNameInput"></input>
                    <br></br><br></br>
                    <label for="passwordInput">Password:</label>
                    <input type="password" name="passwordInput" id="passwordInput"></input>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}