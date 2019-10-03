import React, { Component } from 'react';
import { Navbar, NavbarHeading, NavbarGroup,Icon,Button,Classes,NavbarDivider, Alignment } from '@blueprintjs/core';

class Navigation extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: '#7a3506'}} fixedToTop={true}>
            <NavbarGroup align="left">
              <Icon icon="briefcase" color="white" iconSize="20px" style={{margin:'0 12px'}}/>
              <NavbarHeading style={{color: 'white'}}><h2>Yatri</h2></NavbarHeading>
              <NavbarDivider />
              <NavbarGroup align={Alignment.RIGHT}>
                <Button intent="secondary" style={{color: 'white'}} className={Classes.MINIMAL} icon="home" text="Home" />
                <Button intent="secondary" style={{color: 'white'}} className={Classes.MINIMAL} icon="document" text="Files" />
              </NavbarGroup>
            </NavbarGroup>
          </Navbar>
        )
    }
}

export default Navigation;