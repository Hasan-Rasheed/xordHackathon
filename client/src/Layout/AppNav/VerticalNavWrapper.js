import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';
import bg3 from '../../assets/utils/images/dropdown-header/abstract3.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';
// import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav} from './NavItems';
import {TotalAnalytics , Billing, Account , Individual} from './NavItems'
import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover,
    Nav, NavLink, Col, Row, NavItem, UncontrolledButtonDropdown, Button
} from 'reactstrap';

class SideNav extends Component {

    state = {};

    render() {
        return (
            <>
            {/* <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav className="mb-2 mr-2">
                            Projects
                            <FontAwesomeIcon style = {{float : "right"}} className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu>
                                                <Nav vertical>
                                                    <NavItem className="nav-item-header">
                                                        Activity
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/#">
                                                            Chat
                                                            <div className="ml-auto badge badge-pill badge-info">8</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/#">Recover Password</NavLink>
                                                    </NavItem>
                                                    <NavItem className="nav-item-header">
                                                        My Account
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/#">
                                                            Settings
                                                            <div className="ml-auto badge badge-success">New</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/#">
                                                            Messages
                                                            <div className="ml-auto badge badge-warning">512</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/#">
                                                            Logs
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem className="nav-item-divider"/>
                                                    <NavItem className="nav-item-btn">
                                                        <Button size="sm" className="btn-wide btn-shadow"
                                                                color="danger">
                                                            Cancel
                                                        </Button>
                                                    </NavItem>
                                                </Nav>
                                            </DropdownMenu>
                    </UncontrolledDropdown> */}
            <Fragment>
                {/* <h5 className="app-sidebar__heading">Menu</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Forms</h5>
                <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
                <h5 className="app-sidebar__heading">Xord</h5>
                <MetisMenu content={TotalAnalytics} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Individual</h5>
                <MetisMenu content={Individual} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                {/* <h5 className="app-sidebar__heading">BILLING</h5>
                <MetisMenu content={Billing} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">ACCOUNT</h5>
                <MetisMenu content={Account} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
                
            </Fragment>
            </>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(SideNav);