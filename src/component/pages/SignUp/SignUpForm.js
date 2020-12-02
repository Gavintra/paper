import React, { useState,useEffect } from "react";
//import { storageDb } from "../../../database/firebase";
import firebaseDb  from "../../../database/firebase";

const SignUpForm = (props) => {

    //var storageDb = firebaseDb.storage();

    const initialFieldValues = {
        firstname: '',
        lastname: '',
        telephone: '',
        email: '',
        password: ''
    }

    var [values,setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({ 
                ...initialFieldValues 
            })
        else
            setValues({
                ...props.userObjects[props.currentId]
            })
    }, [props.currentId, props.userObjects])


    

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ชื่อ" name="firstname" value={values.firstname} onChange={handleInputChange} />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="นามสกุล" name="lastname" value={values.lastname} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-12">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="หมายเลขโทรศัพท์" name="telephone" value={values.telephone} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="อีเมล" name="email" value={values.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-key"></i>
                            </div>
                        </div>
                        <input className="form-control" type="password" placeholder="รหัสผ่าน" name="password" value={values.password} onChange={handleInputChange} />
                    </div>
                </div>
                
                <div className="form-control">
                    <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>
        </form>
    );
}
export default SignUpForm;