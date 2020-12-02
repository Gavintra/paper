import React, { useEffect } from "react";
//import DocumentForm from "./DocumentForm";
import firebaseDb  from "../../../database/firebase";

const db = firebaseDb.firestore()

const AllPaperIn = () => {

    const [paperFile, setPaperFile] = React.useState([])

    useEffect(() => {
        const fetchUsers = async () => {
          const paperCollection = await db.collection("paper_file_in").get();
          setPaperFile(
            paperCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchUsers();
      }, []);
    

    



    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12">
                        <legend>รายการเอกสารรับเข้าทั้งหมด</legend>

                            <table className="table table-borderless table-stripped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>เลขที่หนังสือ</th>
                                        <th>เรื่อง</th>
                                        <th>วันที่</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {paperFile.map((user) => {
                            return (
                                <tr >
                                    <td>{user.name}</td>
                                    <td>{user.doc_number}</td>
                                    <td>{user.doc_date}</td>
                                    <td><a href={user.avatar}>Download</a></td>
                                </tr>
                            );
                            })}
                                </tbody>
                            </table>
                        <ul>
                            
                        </ul>
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </>
    );
}

export default AllPaperIn
