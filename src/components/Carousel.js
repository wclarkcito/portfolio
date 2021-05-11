import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Projectimator',
                    subTitle: 'Find a Contractor the easy way!',
                    imgSrc: '',
                    link: 'https://github.com/wclarkcito/contractor',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Cryptelligent',
                    subTitle: 'Your Cryptocurrency journey begins here',
                    imgSrc: '',
                    link: 'https://eroux13.github.io/Cryptelligent',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Weather-Dashboard',
                    subTitle: 'Check your weather forecast here',
                    imgSrc: '',
                    link: 'file:///Users/warrenclark/Weather-Dashboard/index.html',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Employee-Tracker',
                    subTitle: 'Keep track of your employees!',
                    imgSrc: '',
                    link: 'https://github.com/wclarkcito/employee-tracker',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Team-Profile-Generator',
                    subTitle: 'Create a roster for your employees',
                    imgSrc: '',
                    link: 'https://github.com/wclarkcito/Team-Profile-Generator',
                    selected: false
                },
                {
                    id: 0,
                    title: 'E-Commerce',
                    subTitle: 'Manage your inventory',
                    imgSrc: '',
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