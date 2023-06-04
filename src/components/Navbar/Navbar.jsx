import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="navbar">
            <h4 className="font-weight-500 desktop--menu">My Assignment</h4>
            <h4 className="font-weight-500 desktop--menu">Chat with Mentor</h4>
            <div className="navbar--profile">
                <CgProfile />
                <h4 className="font-weight-500 desktop--menu">ProfileName</h4>
                <FaAngleDown />
            </div>
            <div className="hamburger--menu">
                <FaHamburger onClick={(event) => setShowMenu(prevState => !prevState)} />
                {showMenu && <div className="mobile--menu">
                    <h4 className="font-weight-500">My Assignment</h4>
                    <h4 className="font-weight-500">Chat with Mentor</h4>
                    <div className="mobilemenu--profile">
                        <CgProfile />
                        <h4 className="font-weight-500">ProfileName</h4>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Navbar;