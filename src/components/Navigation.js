import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              React计时器
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to='/'><NavItem eventKey={1} >计时器</NavItem></IndexLinkContainer>
              <LinkContainer to='/countdown'><NavItem eventKey={2} >倒计时</NavItem></LinkContainer>
            </Nav>
            <Navbar.Text pullLeft>
              Powered by <Navbar.Link href="https://github.com/icyfish/timer/" target="_blank" className='external-link'>Timer</Navbar.Link>
            </Navbar.Text>

            <Navbar.Text pullRight>
              Created by <Navbar.Link href="https://icyfish.github.io/" target="_blank" className='external-link'>Bingyu Zhang</Navbar.Link>
            </Navbar.Text>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}


export default Navigation;
