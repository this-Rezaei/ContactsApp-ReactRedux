import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 Link text-right">
                    <Link
                        to="/add"
                        style={{ fontWeight: "900" }}
                        className="btn btn-2 btn-primary"
                    >
                        اضافه کردن مخاطب
                    </Link>
                </div>
                <div className="col-md-6 mx-auto"></div>
            </div>
        </div>
    );
};

export default Home;
