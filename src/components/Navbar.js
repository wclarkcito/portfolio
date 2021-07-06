import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';






function Navigation() {
    return (

        <Container fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Warren Clark</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About Me</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <a className="nav-link" href="https://docs.google.com/document/d/18sJsdlw3uFsIeyag0yYk6i4VUIQ6UnGwC-vF0V-P3go/edit?usp=sharing">Resume</a>
                        <a className="nav-link" href="http://www.linkedin.com/in/warren-clark7997b98">LinkedIn<i
                            className="fa fa-linkedin-square"></i></a>
                        <a className="nav-link" href="https://github.com/wclarkcito">GitHub<i className="fa fa-github"></i></a>





                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} subHeading={this.state.home.subHeading} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}



        </Container>
    )
}

export default Navigation