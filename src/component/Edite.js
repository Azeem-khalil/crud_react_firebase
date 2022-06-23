
import React, {useState,setState} from 'react';
import firebase, { dataref } from './Firebase';
import './style.css'

function Edite() {

    const [USER, setUSER]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",

    })
   
    
    const postdata  = (e) => {

        e.preventDefault();
                var firstName = document.getElementById("firstName").value;
                var lastName = document.getElementById("lastName").value;
                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirmPassword").value;
                console.log(firstName+lastName);

            
                var uid = Math.random().toString(36).substr(2, 9);
                  
                firebase.database().ref('user'+ "/"+uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword

                }).then(success => {

                    window.alert("Success:The Data is Entered");
                   // window.location.href = "./Medicines.php";

                    // console.log("Af" + imageurl());
                });

       
     
    }
      const handleSubmit  =  () => {
       // console.log(USER.firstName,USER.lastName,USER.email,USER.password,USER.confirmPassword);

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
                    <input className="form__input" type="text"   id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"   className="form__input" placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" /*value={USER.email}*/  placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password"  placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword"  placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={postdata} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default Edite