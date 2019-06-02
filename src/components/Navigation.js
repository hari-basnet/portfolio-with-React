import React, { Component } from "react";
import Logo from "../assets/images/myLogo.png";
import '../components/navigation.css'



class Navigation extends Component {
    render() {

        return (
            <div className="row">
                <nav>

                    <img className="nav__picture-logo" src={Logo} alt="myLogo" />


                    <ul className="nav__list">
                        <li className="nav__list-item"><a className="nav__link" href={"#"}>Home</a></li>
                        <li className="nav__list-item"><a className="nav__link" href={"#"}>Skills</a></li>
                        <li className="nav__list-item"><a className="nav__link" href={"#"}>Portfolio</a></li>
                        <li className="nav__list-item"><a className="nav__link" href={"#"}>Contact</a></li>

                    </ul>



                </nav>
            </div>
        )
    }
}

export default Navigation;