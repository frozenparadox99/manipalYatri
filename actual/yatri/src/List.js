import React, { Component } from 'react';
import Item from './Item';
import HookItem from './HookItem';



class List extends Component {
    render() {
        return(
            <div className="sub2">  
                <HookItem />
                <HookItem />
                <HookItem />
                <HookItem />
                <HookItem />
                <HookItem />
            </div>
        )
    }
}
export default List;