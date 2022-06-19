import { async } from '@firebase/util';
import React, {useState,setState} from 'react';
//import firebase from './config';
//import { addDoc, collection } from "firebase/firestore";
//import config from './Firebase'
import './styles.css'

function Register() {
    const [USER, setUSER]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",

    })
    // const [firstName, setFirstName] = useState(null)
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [password,setPassword] = useState(null);
    // const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setUSER.firstName(value);
        }
        if(id === "lastName"){
            setUSER.lastName(value);
        }
        if(id === "email"){
            setUSER.email(value);
        }
        if(id === "password"){
            setUSER.password(value);
        }
        if(id === "confirmPassword"){
            setUSER.confirmPassword(value);
        }

    }
    const postdata  = (e) => {

       // const ref= firebase;

    }
      const handleSubmit  =  () => {
        console.log(USER.firstName,USER.lastName,USER.email,USER.password,USER.confirmPassword);

        // try {
        //     const docRef = await addDoc(collection(db, "users"), {
        //       first: "Alan",
        //       middle: "Mathison",
        //       last: "Turing",
        //       born: 1912
        //     });
          
        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   }
          
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={USER.firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={USER.lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={USER.email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={USER.password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={USER.confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={postdata} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default Register