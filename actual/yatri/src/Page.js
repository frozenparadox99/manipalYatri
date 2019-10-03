import React, { Component } from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";


class Page extends Component {
    render() {
        return(   
        <div style={{padding: '3rem'}}>
        <Card interactive={true} elevation={Elevation.TWO}>
            <h1>Card</h1>
            <Button>Submit</Button>
        </Card>
        </div>
        )
    }
}

export default Page;