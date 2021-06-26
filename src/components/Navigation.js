import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Links</a></li>
                </ul>
            </div>
        )
    }
}