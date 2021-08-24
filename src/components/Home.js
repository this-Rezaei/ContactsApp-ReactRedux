import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Home = () => {
    const contacts = useSelector((contact) => contact);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({ type: "َDELETE_CONTACT", paylod: id });
        toast.success("مخاطب با موفقیت حذف شد");
    };
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
                <div className="col-md-8 mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">نام</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col">شماره</th>
                                <th scope="col">رویداد</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id) => (
                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link
                                            style={{ fontWeight: "900" }}
                                            to={`/edit/${contact.id}`}
                                            className="btn btn-small btn-warning m-1"
                                        >
                                            ویرایش
                                        </Link>
                                        <button
                                            style={{ fontWeight: "900" }}
                                            type="button"
                                            className="btn btn-samll btn-danger"
                                            onClick={() =>
                                                deleteContact(contact.id)
                                            }
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
