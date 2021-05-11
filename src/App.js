import React from 'react';
import './App.css';



import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navbar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Warrens Porfolio",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Forward not Backwards',
        subTitle: 'Recent Projects',
        subHeading: 'Checkout my Projects '

      },
      projects: {
        title: 'Projects',
      },

      contact: {
        title: 'Contact me',
      },
    }
  }

  render() {

    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/projects' component={ProjectsPage} />
        </Switch>
        <Footer />
      </Router>

    );
  }


}
export default App;
