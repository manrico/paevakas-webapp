import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Suvaline Restoran</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
     <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Meist
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/menu'}>
              <NavItem>
                <Glyphicon glyph='education' /> Menüü
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/promotion'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Päevapakkumine
              </NavItem>
            </LinkContainer>
   
  </Nav>
</Navbar>
    );
  }
}
