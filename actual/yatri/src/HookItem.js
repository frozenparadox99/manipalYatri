import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Card,Button,Elevation,Alert, Icon } from '@blueprintjs/core';

export default function HookItem(props) {
    const [open, setOpen] = useState(false);
    return(
        <Link to={`/flight/${props.flightName.toLowerCase()}`} style={{textDecoration: 'none'}}>
        <Card interactive={true} elevation={Elevation.TWO} style={{color: 'white' ,paddingTop:'0',marginTop: '0.4rem',background: 'linear-gradient(to right, #2980b9, #6dd5fa)'}} onClick={() => {setOpen(true)}} className="flight-card">
        <div style={{display: 'flex',flexFlow: 'row nowrap',justifyContent: 'center',alignItems: 'center'}}>
            <h2>{props.flightName}</h2>
            <Icon icon="airplane"/>
        </div>
        <p>Card content</p>
        <Button>Submit</Button>
        {/* <Alert isOpen={open} confirmButtonText="Book" cancelButtonText="Cancel" icon="cross" intent="primary" canOutsideClickCancel={true} onClose={()=> {setOpen(false)}} onCancel={()=> {setOpen(false)}} onConfirm={() => }><p>Average fare is X </p>
        </Alert> */}
        </Card>
        </Link>
    )
}