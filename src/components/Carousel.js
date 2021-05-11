import React from 'react';
import contractor from '../assets/contractor';
import lightbulb from '../assets/lightb';
import Roster from '../assets/Roster';
import Weather from '../assets/Weather';
import employee from '../assets/employee';
import ecommerce from '../assets/ecommerce';
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Projectimator',
                    subTitle: 'Find a Contractor the easy way!',
                    imgSrc: contractor,
                    link: 'https://github.com/wclarkcito/contractor',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Cryptelligent',
                    subTitle: 'Your Cryptocurrency journey begins here',
                    imgSrc: lightbulb,
                    link: 'https://eroux13.github.io/Cryptelligent',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather-Dashboard',
                    subTitle: 'Check your weather forecast here',
                    imgSrc: Weather,
                    link: 'file:///Users/warrenclark/Weather-Dashboard/index.html',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Employee-Tracker',
                    subTitle: 'Keep track of your employees!',
                    imgSrc: employee,
                    link: 'https://github.com/wclarkcito/employee-tracker',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Team-Profile-Generator',
                    subTitle: 'Create a roster for your employees',
                    imgSrc: Roster,
                    link: 'https://github.com/wclarkcito/Team-Profile-Generator',
                    selected: false
                },
                {
                    id: 5,
                    title: 'E-Commerce',
                    subTitle: 'Manage your inventory',
                    imgSrc: ecommerce,
                    link: 'https://github.com/wclarkcito/e-commerce',
                    selected: false
                },
            ]

        }
    }

    render() {
        return (
            <p>Carousel Works</p>

        )
    }

}

export default Carousel;