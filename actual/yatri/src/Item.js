import React, { Component } from 'react';
import { Card,Button,Elevation,Alert, Icon } from '@blueprintjs/core';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            opened:false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState(st => {
            return {
                opened: !st.opened
            }
        });
    }

    handleClose() {
        this.setState({
            opened:false
        })
    }

    render() {
        return(
            <Card interactive={true} elevation={Elevation.TWO} style={{color: 'white' ,paddingTop:'0',marginTop: '0.4rem',background: 'linear-gradient(to right, #2980b9, #6dd5fa)'}} onClick={this.handleOpen}>
            <div style={{display: 'flex',flexFlow: 'row nowrap',justifyContent: 'center',alignItems: 'center'}}>
                <h2>Card heading</h2>
                <Icon icon="airplane"/>
            </div>
            <p>Card content</p>
            <Button>Submit</Button>
            <Alert isOpen={this.state.opened} confirmButtonText="Book" cancelButtonText="Cancel" icon="cross" intent="primary" canOutsideClickCancel={true} onCancel={this.handleClose} onClose={this.handleClose}><p>Average fare is X </p>
            </Alert>
            </Card>
        )
    }
}

export default Item;