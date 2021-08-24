import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [valid, setvalid] = useState("");
    const dispatch = useDispatch();
    const History = useHistory();
    const contacts = useSelector((contact) => contact);
    const SubmitHandler = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(
            (contact) => contact.email === email && contact
        );
        const checkNumber = contacts.find(
            (contact) => contact.number === parseInt(number)
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
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        };
        dispatch({ type: "ADD_CONTACT", paylod: data });
        toast.success("مخاطب با موفقیت ذخیره شد");
        History.push("/");
    };
    const clickHandler = () => {
        if (name.length == 0) {
            setvalid("is-invalid");
        } else {
            setvalid("is-valid");
        }
    };
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">اضافه کردن </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={SubmitHandler}>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                placeholder="نام و نام خانوادگی"
                                className={`form-control ${valid}`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="email"
                                placeholder=" ایمیل"
                                className={`form-control ${valid}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="number"
                                placeholder="شماره"
                                className={`form-control ${valid}`}
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2 d-grid gap-2">
                            <input
                                type="submit"
                                value="انجام"
                                className="btn btn-block btn-primary"
                                onClick={clickHandler}
                            />
                        </div>
                        <div className="form-group p-2 d-grid gap-2 Link">
                            <Link
                                to="/"
                                style={{ fontWeight: "900" }}
                                className="btn btn-2 btn-dark"
                            >
                                بازگشت
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
