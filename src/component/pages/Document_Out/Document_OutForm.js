import React, { useState,useEffect } from "react";
//import { storageDb } from "../../../database/firebase";
import firebaseDb  from "../../../database/firebase";

const db = firebaseDb.firestore()

const Document_OutForm = (props) => {

    const [fileUrl, setFileUrl] = React.useState(null) 
    //var storageDb = firebaseDb.storage();
    var storeDb = firebaseDb.storage();
    const onFileChange = async (e) =>{
        //var storageDb = firebaseDb.storage();
        const file = e.target.files[0];
        const storageRef = storeDb.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
        //e.target.documentFile.values(file.name)
        
       
    }

    const initialFieldValues = {
        documentNumber: '',
        documentAt: '',
        documentDate: '',
        documentFrom: '',
        documentTo: '',
        documentName: '',
        documentPractice: '',
        documentRemark: '',
        documentFile: ''
    }

    var [values,setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({ 
                ...initialFieldValues 
            })
        else
            setValues({
                ...props.documentObjects[props.currentId]
            })
    }, [props.currentId, props.documentObjects])


    

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
        const docName = e.target.documentName.value;
        const docNumber = e.target.documentNumber.value;
        const docDate = e.target.documentDate.value;
        if(!docName){
            return
        }
        db.collection("paper_file_out").doc(docName).set({
            name: docName,
            doc_date: docDate,
            doc_number: docNumber,
            avatar: fileUrl
        })
    }

    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="เลขทะเบียนส่ง" name="documentNumber" value={values.documentNumber} onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ที่หนังสือ" name="documentAt" value={values.documentAt} onChange={handleInputChange} />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ลงวันที่" name="documentDate" value={values.documentDate} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="จาก" name="documentFrom" value={values.documentFrom} onChange={handleInputChange} />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ถึง" name="documentTo" value={values.documentTo} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="เรื่อง" name="documentName" value={values.documentName} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="การปฏิบัติ" name="documentPractice" value={values.documentPractice} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="หมายเหตุ" name="documentRemark" value={values.documentRemark} onChange={handleInputChange} />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-file"></i>
                        </div>
                    </div>
                    <input type="file" onChange={onFileChange} />
                </div>
                <div className="form-control">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>
        </form>
    );
}
export default Document_OutForm;