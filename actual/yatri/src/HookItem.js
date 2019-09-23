import React,{useState} from 'react';
import { Card,Button,Elevation,Alert, Icon } from '@blueprintjs/core';

export default function HookItem() {
    const [open, setOpen] = useState(false);
    return(
        <Card interactive={true} elevation={Elevation.TWO} style={{color: 'white' ,paddingTop:'0',marginTop: '0.4rem',background: 'linear-gradient(to right, #2980b9, #6dd5fa)'}} onClick={() => {setOpen(true)}}>
        <div style={{display: 'flex',flexFlow: 'row nowrap',justifyContent: 'center',alignItems: 'center'}}>
            <h2>Card heading</h2>
            <Icon icon="airplane"/>
        </div>
        <p>Card content</p>
        <Button>Submit</Button>
        <Alert isOpen={open} confirmButtonText="Book" cancelButtonText="Cancel" icon="cross" intent="primary" canOutsideClickCancel={true} onClose={()=> {setOpen(false)}} onCancel={()=> {setOpen(false)}}><p>Average fare is X </p>
        </Alert>
        </Card>
    )
}