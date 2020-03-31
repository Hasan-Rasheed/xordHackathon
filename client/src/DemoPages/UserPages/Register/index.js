import React, {Fragment, Component} from "react";

import Slider from "react-slick";

import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import axios from 'axios'
import { USER_REGISTRATION } from "../../../utils/api";
import { RESPONSE_SUCCESS } from "../../../constants/responses";
import { USER_ALREADY_EXIST } from "../../../constants/strings";
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            userName : '',
            password : '',
            confirmPassword : ''
        }
    }
    onChangeEmail = (event) => {
        console.log(event.target.value)
        this.setState({
            email : event.target.value
        })
    }
    onChangeUserName = (event) => {
        console.log(event.target.value)

        this.setState({
            userName : event.target.value
        })
    }
    onChangePassword = (event) => {
        console.log(event.target.value)

        this.setState({
            password : event.target.value
        })
    }
    onChangeConfirmPassword = (event) => {
        console.log(event.target.value)

        this.setState({
            confirmPassword : event.target.value
        })
    }
    onClickLogin = async () => {
        const { email , userName , password , confirmPassword} = this.state
            if(email == '' || password == '' || userName == '' || confirmPassword == ''){
                alert('All Fields Required')
            }
            else{
                if(password !== confirmPassword){
                alert('confirm password Incorrect')
                }
                else{
                    let obj = {
                        email : email,
                        password : password,
                        username : userName
                    }
                    try{
                        let response = await axios.post("http://localhost:3000/auth/signup", obj )
                        console.log("response",response)
                        if(response.status == RESPONSE_SUCCESS){
                            if(response.data == USER_ALREADY_EXIST){
                                alert("user already exist")
                            }
                            else{
                                alert("verification code has been sent to your mail")
                                this.props.history.push({
                                    pathname: "/pages/email-verification",
                                    state : this.state.email
                                      })
                                
                            }
                        }
                    }
                    catch (err){
                        console.log("err",err)
                    }
                    
                   
                }
            }
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };
        const { email , userName , password , confirmPassword} = this.state
        return (

            <Fragment>
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="7" md="12" className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                <div className="app-logo"/>
                                <h4>
                                    <div>Welcome,</div>
                                    <span>It only takes a <span className="text-success">few seconds</span> to create your account</span>
                                </h4>
                                <div>
                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail">
                                                        <span className="text-danger">*</span>
                                                        {' '}Email
                                                    </Label>
                                                    <Input 
                                                    type="email" 
                                                    name="email" 
                                                    id="exampleEmail" 
                                                    value = {email}
                                                    onChange = {this.onChangeEmail}
                                                    placeholder="Email here..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleName">Name</Label>
                                                    <Input 
                                                    type="text" 
                                                    name="text" 
                                                    id="exampleName" 
                                                    value = {userName}
                                                    onChange = {this.onChangeUserName}
                                                    placeholder="Name here..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword">
                                                        <span className="text-danger">*</span>
                                                        {' '}Password
                                                    </Label>
                                                    <Input 
                                                    type="password" 
                                                    name="password" 
                                                    id="examplePassword" 
                                                    value = {password}
                                                    onChange = {this.onChangePassword}
                                                           placeholder="Password here..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePasswordRep">
                                                        <span className="text-danger">*</span>
                                                        {' '}Repeat Password
                                                    </Label>
                                                    <Input 
                                                    type="password" 
                                                    name="passwordrep" 
                                                    id="examplePasswordRep" 
                                                    value = {confirmPassword}
                                                    onChange = {this.onChangeConfirmPassword}

                                                           placeholder="Repeat Password here..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        {/* <FormGroup className="mt-3" check>
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>Accept our <a href="/#">Terms and Conditions</a>.</Label>
                                        </FormGroup> */}
                                        <div className="mt-4 d-flex align-items-center">
                                            <h5 className="mb-0">
                                                Already have an account?{' '}
                                                <a href="/#" className="text-primary">Sign in</a>
                                            </h5>
                                            <div className="ml-auto">
                                                <Button color="primary" 
                                                className="btn-wide btn-pill btn-shadow btn-hover-shine" 
                                                size="lg"
                                                onClick = {this.onClickLogin}
                                                >Create Account</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                        <Col lg="5" className="d-lg-flex d-xs-none">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg3 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}
