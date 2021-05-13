import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import contractor from '../assets/contractor.png';
import lightbulb from '../assets/lightbulb.jpg';
// import Roster from '../assets/Roster.png';
import Weather from '../assets/Weather.png';
// import employee from '../assets/employee.png';
// import ecommerce from '../assets/ecommerce.png';
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
                // {
                //     id: 3,
                //     title: 'Employee-Tracker',
                //     subTitle: 'Keep track of your employees!',
                //     imgSrc: employee,
                //     link: 'https://github.com/wclarkcito/employee-tracker',
                //     selected: false
                // },
                // {
                //     id: 4,
                //     title: 'Team-Profile-Generator',
                //     subTitle: 'Create a roster for your employees',
                //     imgSrc: Roster,
                //     link: 'https://github.com/wclarkcito/Team-Profile-Generator',
                //     selected: false
                // },
                // {
                //     id: 5,
                //     title: 'E-Commerce',
                //     subTitle: 'Manage your inventory',
                //     imgSrc: ecommerce,
                //     link: 'https://github.com/wclarkcito/e-commerce',
                //     selected: false
                // },
            ]

        }
    }


    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className="d-flex flex-row ">
                    {this.state.items.map(item => {
                        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
                    })
                    }

                </Row>
            </Container>

        )
    }

}

export default Carousel;