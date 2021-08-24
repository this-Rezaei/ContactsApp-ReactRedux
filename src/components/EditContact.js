import React from "react";
import { Link, useParams } from "react-router-dom";
const EditContact = () => {
    const { id } = useParams();
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">ویرایش مخاطب {id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                placeholder="نام و نام خانوادگی"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="email"
                                placeholder=" ایمیل"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="number"
                                placeholder="شماره"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group p-2 d-grid gap-2">
                            <input
                                type="submit"
                                value="ویرایش"
                                className="btn btn-block btn-primary"
                            />
                        </div>
                        <div className="form-group p-2 d-grid gap-2 Link">
                            <Link
                                to="/"
                                style={{ fontWeight: "900" }}
                                className="btn btn-2 btn-danger"
                            >
                                کنسل
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditContact;