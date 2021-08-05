import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col,
    Container
} from 'reactstrap';

import * as $ from 'jquery';

$(document).ready(function () {
    var x = document.querySelectorAll("#lnk");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
    $(window).scroll(function () { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $(".nvbr").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        var x = document.querySelectorAll("#lnk");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.color = "black";
        }
      } else {
          $(".nvbr").css("background-color", "transparent"); // if not, change it back to transparent
          var x = document.querySelectorAll("#lnk");
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.color = "white";
          }
      }
    });
});
const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="nvbr" color="" light expand="md" style={{ paddingLeft: '10%', paddingRight: '6%', position: 'fixed', zIndex: '10', borderBottom: '1px solid white' }}>
                <NavbarBrand href="/"><img src="https://i.pinimg.com/originals/f3/f8/43/f3f84327ef6dd07fbfb67a697b3ef959.png" width="217px" height="35px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink  id="lnk" href="/components/" >Ground-Truth Data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="lnk" href="/components/">How it Works</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  id="lnk" href="/components/">Fee Structure</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  id="lnk" href="/components/">Example Deliverables</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="lnk" href="/components/">Submission Portal</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  id="lnk" href="/components/">Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"><button className="btn btn-success" style={{ borderRadius: '25px', paddingLeft: '30px', paddingRight: '30px', fontSize: '5px', width: '320px;' }}>Sign in</button></NavLink>
                        </NavItem>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;