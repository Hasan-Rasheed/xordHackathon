import React, {Fragment , Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from 'react-stickynode';

import {
    Card, CardBody, CardHeader, CardFooter, Col, Row,
    FormGroup, Label, Input, CustomInput,
    UncontrolledButtonDropdown, Button, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faCog,
    faAngleLeft,
    faAngleRight

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ionicon from 'react-ionicons'
import Axios from 'axios';
import { ADD_NEW_COURSE } from '../../../../../utils/api';

class FormStickyBasic extends Component {
    constructor(props){
        super(props)
        this.state = {
                courseUrl : "",
                totalCourseDuration  : "",
                contentName : "",
                courseName : "",
                subContentName : "",
                subDuration : "",
                subContentType : "",
                contentList : [],
                mainContentList : []
        }
    }
    onChangeCourseName = (event) => {
            console.log(event.target.value)
            this.setState({
                courseName : event.target.value
            })
    }

    onChangeCourseUrl = (event) => {
        console.log(event.target.value)
        this.setState({
            courseUrl : event.target.value
        })
    }
    onChangeTotalCourseDuration = (event) => {
        console.log(event.target.value)
        this.setState({
            totalCourseDuration : event.target.value
        })
    }
    onChangeContentName = (event) => {
        console.log(event.target.value)
        this.setState({
            contentName : event.target.value
        })
    }
    onChangeSubContentName = (event) => {
        console.log(event.target.value)
        this.setState({
            subContentName : event.target.value
        })
    }
   
    onChangeSubDurationTime = (event) => {
        console.log(event.target.value)
        this.setState({
            subDuration : event.target.value
        })
    }
    onChangeSubContentType = (event) => {
        console.log(event.target.value)
        this.setState({
            subContentType : event.target.value
        })
    }
    onClickAdd = () => {
            // let array = [...this.state.contentList]
if(this.state.subContentName == "" || this.state.subContentType == "" || this.state.subDuration == ""){
    alert("Sub content item fields must be filled")
}
else{
            let updatedList = [...this.state.contentList , {
                contentName : this.state.subContentName,
                contentDuration : this.state.subDuration,
                contentType : this.state.subContentType
            }]
            console.log(updatedList)
            this.setState({
                contentList : updatedList
            })
        }
    }

    onClickAddContent = () => {
        let updatedMainContent = [...this.state.mainContentList , {
            contentName : this.state.contentName,
            subContenList : this.state.contentList,

        }]
        console.log(updatedMainContent)
        this.setState({
            mainContentList : updatedMainContent,
            contentName : '',
            subDuration : '',
            subContentType : '',
            subContentName : ''
        })
            // if(this.state.courseName == "" ||
            // this.state.courseUrl == "" ||
            // this.state.contentName == "" ||
            // this.state.contentList.length == 0 ||
            // this.state.contentDuration == "" 
    }
    onClickSave = async () => {
            try{
                console.log("courseName" , this.state.courseName)
                console.log("courseUrl" , this.state.courseUrl )
                console.log(this.state.totalCourseDuration)
                console.log("content" , this.state.mainContentList)
                let obj = {
                    courseName : this.state.courseName,
                    url : this.state.courseUrl,
                    totalDuration :this.state.totalCourseDuration,
                    content : this.state.mainContentList,
                    name : "hasanrasheed921@gmail.com"
                }
                let response = await Axios.post(ADD_NEW_COURSE , obj)
                console.log(response)
            }
            catch (err) {
                console.log("err" , err)
            }
    }
    render() {
       const  {contentName , subDurationTime  , courseUrl ,courseName , subContentName ,subContentType ,totalCourseDuration }  =  this.state
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Card className="main-card mb-3">
                            <Sticky enabled={true} top='.app-header' innerZ="15" activeClass="sticky-active-class">
                                <CardHeader className="card-header-lg">
                                    <div
                                        className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Enroll New Course
                                    </div>
                                    {/* <div className="btn-actions-pane-right">
                                        <Button size="lg" color="warning" className="mr-2"
                                                onClick={this.toggleCalendar}>
                                                <span className="mr-2 opacity-8">
                                                    <Ionicon color="#333333" fontSize="1.2rem"
                                                             icon="ios-analytics-outline" shake={true}/>
                                                </span>
                                            Dummy Button
                                        </Button>

                                        <UncontrolledButtonDropdown>
                                            <Button size="lg" color="primary">
                                                <span className="mr-2 opacity-6">
                                                    <FontAwesomeIcon icon={faCog}/>
                                                </span>
                                                Actions
                                            </Button>
                                            <DropdownToggle className="dropdown-toggle-split" caret size="lg"
                                                            color="primary"/>
                                            <DropdownMenu right>
                                                <DropdownItem>Menus</DropdownItem>
                                                <DropdownItem>Settings</DropdownItem>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>Actions</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>Dividers</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div> */}
                                </CardHeader>
                            </Sticky>
                            <CardBody className="pt-4">
                                <Col md="8" className="mx-auto">
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Course Name</Label>
                                                <Input 
                                                type="text" 
                                                name="course" 
                                                id="courseName"
                                                placeholder="Enter Your Course Name Here"
                                                value = {courseName}
                                                onChange = {this.onChangeCourseName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="examplePassword">Course Duration</Label>
                                                <Input 
                                                type="text" 
                                                name="duration" 
                                                id="durationTime"
                                                placeholder="Course Duration"
                                                value = {totalCourseDuration}
                                                onChange = {this.onChangeTotalCourseDuration}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleAddress">Course Url</Label>
                                        <Input 
                                                type="text" 
                                                name="url" 
                                                id="url"
                                                placeholder="Course Duration"
                                                value = {courseUrl}
                                                onChange = {this.onChangeCourseUrl}/>
                                    </FormGroup>
                                    <h6>ADD YOUR CONTENTS ONE BY ONE BELOW</h6>
                                    <FormGroup style = {{border : "1px solid lightgray", padding : "10px" , borderRadius : "10px"}}>
                                    <Label for="exampleAddress">Content Name</Label>
                                        <Input 
                                                type="text" 
                                                name="contentName" 
                                                id="url"
                                                placeholder="Course Duration"
                                                value = {contentName}
                                                onChange = {this.onChangeContentName}/>
                                   <FormGroup style = {{marginTop : "10px"}}>
                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="exampleCity">SubContent Name</Label>
                                                <Input 
                                                type="text"
                                                 name="subContentName"
                                                  id="subContentName"
                                                  value = {subContentName}
                                                onChange = {this.onChangeSubContentName}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="exampleState">Duration</Label>
                                                <Input type="text" name="subDuration" id="exampleState"
                                                value = {subDurationTime}
                                                onChange = {this.onChangeSubDurationTime}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                        <Label for="exampleCustomSelect">Custom Select</Label>
                                        <CustomInput value = {subContentType} onChange = {this.onChangeSubContentType} type="select" id="exampleCustomSelect" name="customSelect">
                                            <option value="">Select</option>
                                            <option value="Video">Video</option>
                                            <option value="Study">Study</option>
                                            <option value="Coding">Coding</option>
                                            {/* <option>Value 4</option>
                                            <option>Value 5</option> */}
                                        </CustomInput>
                                        
                                    </FormGroup>
                                        </Col>
                                    <FormGroup>
                                        <Col md = {2}>
                                        <Label for="exampleCustomSelect"></Label>

                                            <Button onClick = {this.onClickAdd} style = {{marginTop : "10px"}}>
                                        {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                                        +
                                        </Button>
                                        </Col>
                                        </FormGroup>
                                    </Row>
                                    </FormGroup>
                                    <div style = {{marginTop : "1em",padding : "2em" , border : "2px solid lightgray" , borderRadius : "10px"}}>
                                    {this.state.contentList.length !== 0 ? <h3 style = {{marginLeft : "10px"}}>Sub Contents</h3> : null}
                                            {
                                                this.state.contentList.map( list => {
                                                    return(
                                                        <div style = {{marginLeft : "1em" , borderBottom : "1px solid lightgray"}}>{list.contentName + "   " + list.contentType + "   " + list.contentDuration}</div>
                                                    )
                                                
                                                })
                                            }
</div>
<div className="d-block text-center">
                                {/* <Button size="sm" className="mr-2" color="link">Cancel</Button> */}
                                <Button size="sm" color="success" onClick = {this.onClickAddContent}>Add Content</Button>
                            </div>
                                    </FormGroup>
                                    <div style = {{ marginTop : "1em" , padding : "2em" , border : "2px solid lightgray" , borderRadius : "10px"}}>

                                    {this.state.mainContentList.length !== 0 ? <h3 style = {{marginLeft : "10px"}}>List of Contents Below</h3> : null}
                                    {
                                                this.state.mainContentList.map( list => {
                                                    return(
                                                        <div style = {{marginLeft : "1em" , borderBottom : "1px solid lightgray"}}>{list.contentName }</div>
                                                    )
                                                
                                                })
                                            }
                                            </div>
                                    {/* <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck"/>
                                        <Label for="exampleCheck" check>Check me out</Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCheckbox">Checkboxes</Label>
                                        <div>
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox"/>
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one"/>
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one"
                                                         disabled/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCheckbox">Radios</Label>
                                        <div>
                                            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                                                         label="Select this custom radio"/>
                                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one"/>
                                            <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one"
                                                         disabled/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCheckbox">Inline</Label>
                                        <div>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input"
                                                         inline/>
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline/>
                                        </div>
                                    </FormGroup> */}
                                    
                                    {/* <FormGroup>
                                        <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
                                        <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
                                            <option value="">Select</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                            <option>Value 4</option>
                                            <option>Value 5</option>
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
                                        <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
                                            <option value="">Select</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                            <option>Value 4</option>
                                            <option>Value 5</option>
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
                                        <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple
                                                     disabled>
                                            <option value="">Select</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                            <option>Value 4</option>
                                            <option>Value 5</option>
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomFileBrowser">File Browser</Label>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"
                                                     label="Yo, pick a file!"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled/>
                                    </FormGroup> */}
                                </Col>
                          
<div className="d-block text-center">
                                {/* <Button size="sm" className="mr-2" color="link">Cancel</Button> */}
                                <Button size="sm" color="success" onClick = {this.onClickSave}>Save Course</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
 
export default FormStickyBasic 