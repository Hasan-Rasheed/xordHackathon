import React, { Fragment, Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Col, Row, Button,
    Card, Nav, NavLink, NavItem,
    DropdownMenu, DropdownItem,
    CustomInput, InputGroup, InputGroupAddon, Input,
    Table, UncontrolledButtonDropdown, DropdownToggle
} from 'reactstrap';

import JwPagination from 'jw-react-pagination';

import Hamburger from 'react-hamburgers';
import cx from 'classnames';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    faStar,
    faCalendarAlt,
    faAngleLeft,
    faAngleDown,
    faSearch,
    faAngleRight,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faTags

} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { FETCH_CONTENT, ADD_NEW_COURSE } from "../../../utils/api";

const customLabels = {
    first: <FontAwesomeIcon icon={faAngleDoubleLeft} />,
    last: <FontAwesomeIcon icon={faAngleDoubleRight} />,
    previous: <FontAwesomeIcon icon={faAngleLeft} />,
    next: <FontAwesomeIcon icon={faAngleRight} />
}

export default class Mailbox extends Component {
    constructor() {
        super();

        var exampleItems = [...Array(30).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

        this.onChangePage = this.onChangePage.bind(this);

        this.state = {
            exampleItems,
            pageOfItems: [],
            active: false,
            html: null,
            coursesList : []
        };
    }

    async componentDidMount() {
       let obj = {
           url : "https://www.coursera.org/learn/bootstrap-4"
       }
        try {

            let response = await axios.get(ADD_NEW_COURSE)
            let scrapperResponse = await axios.post(FETCH_CONTENT,obj)

            console.log(scrapperResponse)

            this.setState({
                coursesList : response.data,
                html : scrapperResponse.data.res.content
            })
           
        }
        catch (err) {
            console.log(err)
        }
    }
 
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }

    createMarkup() {
        return {
            __html: this.state.html
        };
    };
    render() {
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
                        <div
                            className={cx("app-inner-layout", {
                                'open-mobile-menu': this.state.active,
                            })}

                        >

                            <div className="app-inner-layout__header bg-heavy-rain">
                                <PageTitle
                                    heading="My Dashboard"
                                    subheading="Create stunning UIs for your pages with these layout components."
                                    icon="pe-7s-power icon-gradient bg-mixed-hopes"
                                />
                            </div>
                            <div className="app-inner-layout__wrapper">
                                <div dangerouslySetInnerHTML={this.createMarkup()} />   
                                <Card className="app-inner-layout__content">
                                    <div>
                                        <div className="app-inner-layout__top-pane">
                                            <div className="pane-left">
                                                <div className="mobile-app-menu-btn">
                                                    <Hamburger
                                                        active={this.state.active}
                                                        type="elastic"
                                                        onClick={() => this.setState({ active: !this.state.active })}
                                                    />
                                                </div>
                                                <h4 className="mb-0">
                                                    Courses
                                            </h4>

                                            </div>

                                        </div>
                                        <div className="bg-white">

                                            <Table responsive className="text-nowrap table-lg mb-0" hover>
                                                <tbody>
                                                    {
                                                        this.state.coursesList.map(courses => {
                                                            return (
                                                                <tr>
                                                                    <td className="text-center" style={{ width: '78px' }}>
                                                                        <CustomInput type="checkbox" id="eCheckbox1"
                                                                            label="&nbsp;" />
                                                                    </td>
                                                                    {/* <td className="text-left pl-1"><FontAwesomeIcon icon={faStar}/></td> */}
                                                                    <td>
                                                                        <div className="widget-content p-0">
                                                                            <div className="widget-content-wrapper">
                                                                                
                                                                                <div className="widget-content-left">
                                                                                    <div className="widget-heading">
                                                                                        {courses.courseName}
                                                                                    </div>
                                                                                    <div className="widget-subheading">
                                                                    {courses.totalDuration}
                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-left">{courses.url}</td>
                                                                    <td>
                                                                        <FontAwesomeIcon className="opacity-4" icon={faTags} />
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt} />
                                                                        {courses.name}
                                                </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }


                                                </tbody>
                                            </Table>
                                            <div className="app-inner-layout__bottom-pane d-block text-center">
                                                <JwPagination pageSize={5} items={this.state.exampleItems}
                                                    onChangePage={this.onChangePage}
                                                    labels={customLabels} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
