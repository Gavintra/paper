import React, { useState,useEffect } from "react";
import Document_InForm from "./Document_InForm";
import firebaseDb  from "../../../database/firebase";


const Document_In = () => {

    var [documentInObjects, setDocument_InObjects] = useState({})
    var [currentId, setCurrentId] = useState('')
    var fireDb = firebaseDb.database().ref();
    useEffect(() => {
        
        fireDb.child('documents_in').on('value', snapshot=>{
            if(snapshot.val() != null)
                setDocument_InObjects({
                ...snapshot.val()
                
            })
            else
                setDocument_InObjects({})
            
        })

    }, [])
    

    const addOrEdit = obj => {
        if (currentId == '')
        fireDb.child('documents_in').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                }
            )
        else
        fireDb.child(`documents_in/${currentId}`).set(
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
            fireDb.child(`documents_in/${id}`).remove(
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
                        <legend>ทะเบียนหนังสือรับ</legend>
                            <table className="table table-borderless table-stripped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>เลขทะเบียนส่ง</th>
                                        <th>ลงวันที่</th>
                                        <th>เรื่อง</th>
                                        <th>จาก</th>
                                        <th>ถึง</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        Object.keys(documentInObjects).map(id => {
                                            return <tr key={id}>
                                                <td>{documentInObjects[id].documentNumber}</td>
                                                <td>{documentInObjects[id].documentDate}</td>
                                                <td>{documentInObjects[id].documentName}</td>
                                                <td>{documentInObjects[id].documentFrom}</td>
                                                <td>{documentInObjects[id].documentTo}</td>
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
                        <legend>อัพโหลดหนังสือรับ</legend>
                            <Document_InForm {...({addOrEdit,currentId,documentInObjects})} />
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </>
    );
}

export default Document_In
