import React from 'react';
import './App.css';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navbar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Warrens Porfolio",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Move Forward',
        subTitle: 'Recent Projects',
        subHeading: 'Checkout my Projects '

      },
      projects: {
        title: 'About me',
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
          <Route path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </Router>

    );
  }


}
export default App;
