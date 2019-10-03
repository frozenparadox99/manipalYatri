import React, { Component } from 'react';
import Item from './Item';
import HookItem from './HookItem';
import uuid from 'uuid/v4';

class List extends Component {
    constructor() {
        super();
        this.state = {
            flights: ['AI1','AI2','AI3','ING1','JET2']
        }
    }
    render() {
        return(
            <div className="sub2"> 
                {this.state.flights.map(el => {
                    const id = uuid();
                    return <HookItem id={id} flightName={el} key={id} />
                })} 
                {/* <HookItem id={1}/>
                <HookItem id={2}/>
                <HookItem id={3}/>
                <HookItem id={4}/>
                <HookItem id={5}/>
                <HookItem id={6}/> */}
            </div>
        )
    }
}
export default List;