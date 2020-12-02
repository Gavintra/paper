import React , { Component } from "react";
import fireDb  from "../../../database/firebase";

class SignIn extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fireDb.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fireDb.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(

        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-7">
                        <legend>ระบบจัดการเอกสาร</legend>
                        </div>
                        <div className="col-md-5">
                        <legend>เข้าสู่ระบบ</legend>
                        <form >
                            
                            <div className="form-row">
                                <div className="form-group input-group col-md-6">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-user-alt"></i>
                                        </div>
                                    </div>
                                    <input type="email" id="email" name="email" placeholder="enter email address" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="form-group input-group col-md-6">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-key"></i>
                                        </div>
                                    </div>
                                    <input name="password" type= "password" onChange={this.handleChange} id="password" placeholder="enter password" value={this.state.password} />
                                </div>
                            </div>
                            
                            
                            
                            <div className="form-control">
                                <input type="submit" value="เข้าสู่ระบบ" onClick={this.login} className="btn btn-primary btn-block" />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </>
        
    )
}
}
export default SignIn;