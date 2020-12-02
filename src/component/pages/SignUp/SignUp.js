import HeroSection from '../../HeroSection';
import React, { useState,useEffect } from "react";
import SignUpForm from "./SignUpForm";
import firebaseDb  from "../../../database/firebase";


const SignUp = () => {

    var [userObjects, setUserObjects] = useState({})
    var [currentId, setCurrentId] = useState('')
    var fireDb = firebaseDb.database().ref();
    useEffect(() => {
        
        fireDb.child('users').on('value', snapshot=>{
            if(snapshot.val() != null)
            setUserObjects({
                ...snapshot.val()
                
            })
            else
            setUserObjects({})
            
        })

    }, [])
    

    const addOrEdit = obj => {
        if (currentId == '')
        fireDb.child('users').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                }
            )
        else
        fireDb.child(`users/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    //else
                        //setCurrentId('')
                }
            )
    }

    

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            fireDb.child(`users/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }


    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-7">
                        <legend>ผู้ใช้งานทั้งหมด</legend>
                            <table className="table table-borderless table-stripped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>ชื่อ</th>
                                        <th>นามสกุล</th>
                                        <th>อีเมล</th>
                                        <th>หมายเลขโทรศัพท์</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        Object.keys(userObjects).map(id => {
                                            return <tr key={id}>
                                                <td>{userObjects[id].firstname}</td>
                                                <td>{userObjects[id].lastname}</td>
                                                <td>{userObjects[id].email}</td>
                                                <td>{userObjects[id].telephone}</td>
                                                <td>
                                                    <a className="btn text-primary" onClick={()=> {setCurrentId(id) }}>
                                                        <i className="fas fa-pencil-alt"></i>
                                                    </a>
                                                    <a className="btn text-primary" onClick={()=> {onDelete(id) }}>
                                                        <i className="fas fa-trash-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        })
                                        
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-5">
                        <legend>ข้อมูลผู้ใช้งาน</legend>
                            <SignUpForm {...({addOrEdit,currentId,userObjects})} />
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </>
    );
}

export default SignUp
