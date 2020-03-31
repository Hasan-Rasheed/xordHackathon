import React, {Fragment, Component} from "react";

import Slider from "react-slick";

import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { USER_VERIFICATION } from "../../../utils/api";
import axios from 'axios'
import { CODE_MATCHED } from "../../../constants/strings";
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verificationCode : ''
        }
    }
    onChangeCode = (event) => {
        console.log(event.target.value)
        this.setState({
            verificationCode : event.target.value
        })
    }
    onClickLogin = async () => {
        if(this.state.verificationCode == ''){
            alert("enter code please")
        }
        else {
            console.log("email ", this.props.location.state)
            let obj = {
                email : this.props.location.state,
                code : this.state.verificationCode
            }
            try{
                let response = await axios.post(USER_VERIFICATION , obj)
                console.log(response)
                if( response.data.result[1] == CODE_MATCHED){
                   
                        this.props.history.push({
                            pathname: "/dashboards/minimal-dashboard-1"
                          });
                }
                else {
                    alert("INVALID CODE")
                }
            }
            catch (err) {
                console.log("err " , err)
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
        return (

            <Fragment>
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="4" className="d-none d-lg-block">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg1 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Perfect Balance</h3>
                                            <p>
                                                ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.
                                            </p>
                                        </div>
                                    </div>
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
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                        <div className="slide-img-bg opacity-6"
                                             style={{
                                                 backgroundImage: 'url(' + bg2 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Complex, but lightweight</h3>
                                            <p>
                                                We've included a lot of components that cover almost all use cases for
                                                any type of application.
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                        <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                            <Col lg="6" md="8" sm="12" className="mx-auto app-login-box">
                                <div className="app-logo"/>
                                <h4>
                                    <div>Verification Code</div>
                                    {/* <span>Use the form below to recover it.</span> */}
                                </h4>
                                <div>
                                    <Form>
                                        <Row form>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label for="exampleEmail">Code</Label>
                                                    <Input 
                                                    type="email" 
                                                    name="email" 
                                                    id="exampleEmail"
                                                    value = {this.state.verificationCode}
                                                    onChange = {this.onChangeCode}
                                                           placeholder="Code here..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <div className="mt-4 d-flex align-items-center">
                                            {/* <h6 className="mb-0">
                                                <a href="/#" className="text-primary">Sign in existing account</a>
                                            </h6> */}
                                            <div className="ml-auto">
                                                <Button 
                                                 color="primary"
                                                 size="lg"
                                                 onClick = {this.onClickLogin}
                                                 >Login</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}
