import React from 'react';
import API from '../utils/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';




class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,

        }
    }

    handleChange = (event) => {


        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
            emailSent: false

        });
        API.sendEmail({
            email: this.state.email,
            message: this.state.message,
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    emailSent: true
                })

            } else {
                this.setState({
                    emailSent: false
                })
            }
        })

    }



    render() {
        return (
            <div>
                <Hero title />

                <Content>
                    <form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>





                        {/* {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>} */}

                    </form>
                    <br>
                    </br>


                    <a href="mailto:Wclarkcito@gmail.com">Or you can reach me via email at wclarkcito@gmail.com</a>


                </Content>
            </div>
        );

    }

}

export default ContactPage;