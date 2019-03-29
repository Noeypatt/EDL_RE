import React, { Component } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                
                <Navbar color="tranparent" light expand="md">
                    <NavbarBrand href="/">Elderly</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="auto" navbar>
                            <NavItem>
                                <NavLink href="#">1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">2</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Addmin
                                    </DropdownItem>
                                    <DropdownItem>
                                        person
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Navbar>

            </div>
        );
    }

}
export default Header;