import React, { Component } from 'react';
import {Icon,InputGroup,Spinner,Callout,Button} from "@blueprintjs/core";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            source: '',
            dest: ''
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
       
    }
    render() {
        const returner1 = this.state.source?<Spinner size={Icon.SIZE_STANDARD} /> : undefined;
        const returner2 = this.state.dest?<Spinner size={Icon.SIZE_STANDARD} /> : undefined;
        return (
            <div className="sub1">
            <Callout icon="help" intent="success" style={{borderRadius:'10px' ,padding:"2rem",backgroundColor: '#c3ffb3'}}>
            <h1>Where would you like to go today?</h1>
                <InputGroup
                    style={{marginBottom:"1rem"}}
                    disabled={false}
                    large={true}
                    leftIcon="search"
                    onChange={this.handleChange}
                    placeholder="Enter Source"
                    rightElement={returner1}
                    type="search"
                    name="source"
                    value={this.state.source}
                />
                <InputGroup
                    disabled={false}
                    large={true}
                    leftIcon="search"
                    onChange={this.handleChange}
                    placeholder="Enter Destination"
                    rightElement={returner2}
                    type="search"
                    name="dest"
                    value={this.state.dest}
                    
                />
                <Button icon="confirm" intent="danger" style={{margin:'0.5rem 40%'}}>Search</Button>
            </Callout>
            </div>
        )
    }
}

export default Form;