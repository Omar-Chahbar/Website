import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as emailjs from 'emailjs-com';
import AlertMessage from "./AlertMessage";
import './EmailForm.scss';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            error: false,
            formEmailSent: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.sendFeedback(
            this.state.email,
            this.state.name,
            this.state.message);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    sendFeedback(email, name, message) {
        emailjs.send(
            "default_service",
            "website",
            {
                senderEmail: email,
                name,
                message,
            },
            "user_I3muESxi52zKaP31D1uGF"
        )
            .then(res => {
                this.setState({formEmailSent: true, error: false})
            })
            .catch(err => {
                this.setState({
                    error: true,
                })
            })
    }

    render() {
        return (
                <Form className="form-box" onSubmit={this.onSubmit}>
                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control
                                name="name"
                                placeHolder="Name"
                                id="name-control"
                                type="text"
                                onChange={this.handleInputChange}
                                className="field"
                            />
                        </Col>
                        <Col sm="10">
                            <Form.Control
                                name="email"
                                placeHolder="Email"
                                id="email-control"
                                type="text"
                                onChange={this.handleInputChange}
                                className="field"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Col sm="10">
                        <Form.Control name="message"
                                      as="textarea"
                                      placeHolder="Enter Message"
                                      rows="3"
                                      onChange={this.handleInputChange}
                                      className="field"
                        />
                        </Col>
                    </Form.Group>
                    <Button className="btn-submit" variant="dark" type="submit">
                        Submit
                    </Button>
                    <AlertMessage isShown={this.state.error} variant="warning"
                                  message="Oops, sorry! Looks like there's a problem with my email server, If you want to get in contact you can email me directly at chahbar.omar@gmail.com"/>
                    <AlertMessage isShown={this.state.formEmailSent} variant="success" message="Message Sent!"/>
                </Form>
        );
    }
}

export default EmailForm;