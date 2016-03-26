import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import config from '../../config';
import { IndexLink } from 'react-router';
import { IndexLinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

require('./App.scss');

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        <Helmet {...config.app.head} />
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">
                {config.app.title}
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container body-content">
          {this.props.children}
          <hr />
          <footer>
            <p>&copy; 2016 - {config.app.title}</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(
state => state,
{ }
)(App);
