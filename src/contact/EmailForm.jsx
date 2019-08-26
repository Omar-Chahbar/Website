import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as emailjs from 'emailjs-com';
import AlertMessage from "./AlertMessage";
import './EmailForm.scss';
import {Fade} from "react-reveal";

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            error: false,
            formEmailSent: false,
            successVisible: false,
            invalidEmail:false,

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

    onShowAlert = ()=>{
        this.setState({successVisible:false},()=>{
            window.setTimeout(()=>{
                this.setState({successVisible:true})
            },800)
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
        this.setState({formEmailSent: true, error: false, invalidEmail: false});
        this.onShowAlert();
        })
        .catch(err => {
            console.log(err);
            if(err.status === 412){
                this.setState({
                    invalidEmail: true,
                })
            }
            else {
                this.setState({
                    error: true,
                })
            }
        })
    }

    render() {
        const disableError = () => this.setState({error: false, invalidEmail: false});
        return (
            <div>
                <AlertMessage isShown={this.state.invalidEmail} variant="warning" close={disableError}
                              message="Are you sure that email is valid? If you're having trouble you can email me directly at chahbar.omar@gmail.com"/>
                <AlertMessage isShown={this.state.error} variant="warning" close={disableError}
                              message="Oops, sorry! Looks like there's a problem with my email server, If you want to get in contact you can email me directly at chahbar.omar@gmail.com"/>
                {this.state.successVisible && (
                    <Fade duration={1500}>
                        <div className="success-message">
                            <p>Message Sent! I'll get back to you as soon as possible!</p>
                        </div>
                    </Fade>
                )}
                <Fade left opposite when={!this.state.formEmailSent}>
                    <Form className="form-box" onSubmit={this.onSubmit}>
                        <Form.Group as={Row}>
                            <Col sm="10">
                                <Form.Control
                                    name="name"
                                    placeholder="Name"
                                    id="name-control"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    className="field"
                                />
                            </Col>
                            <Col sm="10">
                                <Form.Control
                                    name="email"
                                    placeholder="Email"
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
                                              placeholder="Enter Message"
                                              rows="3"
                                              onChange={this.handleInputChange}
                                              className="field"
                                />
                            </Col>
                        </Form.Group>
                        <Button className="btn-submit" variant="dark" type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </Fade>
            </div>
        );
    }
}

export default EmailForm;