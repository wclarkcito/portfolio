import React from 'react';
import './App.css';

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

      render() {

        return (
          <div> Portfolio </div>

        );
      }
    }

    export default App;
