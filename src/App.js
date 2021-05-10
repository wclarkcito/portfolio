import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'reat-bootstrap/Container';

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
        title: 'Forward not Backwards',
        subTitle: 'Recent projects',
        subHeading: 'Checkout my projects below'

      },
      about: {
        title: 'About me',
      },

      contact: {
        title: 'Contact me',
      },
    }
  }

  render() {

    return (
      <router>
        <container fluid>

        </container>
      </router>

    );
  }


}
export default App;
