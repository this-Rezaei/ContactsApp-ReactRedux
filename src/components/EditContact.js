import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { toast } from "react-toastify";
const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const History = useHistory();
    const { id } = useParams();
    const contacts = useSelector((contact) => contact);
    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.email === email
        );
        const checkNumber = contacts.find(
            (contact) =>
                contact.id !== parseInt(id) &&
                contact.number === parseInt(number)
        );

        if (!email || !name || !number) {
            return toast.warning("فیلد ها خالی هستند");
        }
        if (checkEmail) {
            return toast.error("ایمیل صحیح نمی باشد");
        }
        if (checkNumber) {
            return toast.error("شماره صحیح نمی باشد");
        }
        const data = {
            id: parseInt(id),
            name,
            email,
            number,
        };
        dispatch({ type: "َUPDATE_CONTACT", paylod: data });
        toast.success("مخاطب با موفقیت  ویرایش شد");
        History.push("/");
    };
    return (
        <div className="container">
            {currentContact ? (
                <>
                    <div className="row">
                        <h1 className="display-3 my-5 text-center">
                            ویرایش مخاطب {id}
                        </h1>
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form onSubmit={SubmitHandler}>
                                <div className="form-group p-2">
                                    <input
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <input
                                        type="email"
                                        placeholder=" ایمیل"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <input
                                        type="number"
                                        placeholder="شماره"
                                        className="form-control"
                                        value={number}
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
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
                </>
            ) : (
                <h1 className="display-3 my-5 text-center">
                    {" "}
                    مخاطبی با همچین آیدیی وجود ندارد {id}
                </h1>
            )}
        </div>
    );
};

export default EditContact;
