import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand ml-5">
                لیست مخاطبین
            </Link>
        </nav>
    );
};
export default Navbar;
