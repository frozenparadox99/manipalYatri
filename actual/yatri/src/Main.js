import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class Main extends Component {
    render() {
        return (
            <div style={{padding: '3rem'}}>
                <Form />
                <List />
            </div>
        )
    }
}

export default Main;