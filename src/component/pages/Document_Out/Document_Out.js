import React, { useState,useEffect } from "react";
import Document_OutForm from "./Document_OutForm";
import firebaseDb  from "../../../database/firebase";


const Document_Out = () => {

    var [documentObjects, setDocumentOutObjects] = useState({})
    var [currentId, setCurrentId] = useState('')
    var fireDb = firebaseDb.database().ref();
    useEffect(() => {
        
        fireDb.child('documents_out').on('value', snapshot=>{
            if(snapshot.val() != null)
                setDocumentOutObjects({
                ...snapshot.val()
                
            })
            else
                setDocumentOutObjects({})
            
        })

    }, [])
    

    const addOrEdit = obj => {
        if (currentId == '')
        fireDb.child('documents_out').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                }
            )
        else
        fireDb.child(`documents_out/${currentId}`).set(
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
            fireDb.child(`documents_out/${id}`).remove(
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
                        <legend>ทะเบียนหนังสือส่ง</legend>
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
                                        
                                        Object.keys(documentObjects).map(id => {
                                            return <tr key={id}>
                                                <td>{documentObjects[id].documentNumber}</td>
                                                <td>{documentObjects[id].documentDate}</td>
                                                <td>{documentObjects[id].documentName}</td>
                                                <td>{documentObjects[id].documentFrom}</td>
                                                <td>{documentObjects[id].documentTo}</td>
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
                        <legend>อัพโหลดหนังสือส่ง</legend>
                            <Document_OutForm {...({addOrEdit,currentId,documentObjects})} />
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </>
    );
}

export default Document_Out
