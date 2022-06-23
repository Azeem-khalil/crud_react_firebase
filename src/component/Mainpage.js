import React, {useState,setState} from 'react';
import firebase, { dataref } from './Firebase';
import { getDatabase, ref, onValue} from "firebase/database";
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
var content = "";
var count = 0;
const delete_ = (e) => {
  e.preventDefault();

  var ids = document.getElementsByClassName("deleteuser");
  console.log(ids.attr("id"));

  firebase
      .database()
      .ref("user/" + ids.attr("id"))
      .remove();
}
function FetchAllUsers() {
  // var database = firebase.database().ref().child("user");

  console.log("qqq");

   //const db = getDatabase();
   const db = getDatabase();
const starCountRef = ref(db, 'user');
onValue(starCountRef, (snapshot) => {
//const data = snapshot.val();
console.log("qqq"+ snapshot.key);
snapshot.forEach(data => {
 
 var firstName = data.val().firstName;
 var lastName= data.val().lastName;
 var email= data.val().email;
  content += "<tr>";
 
  content += "<td>" + firstName + "</td>"; //column1
  content += "<td>" + lastName + "</td>";
  content += "<td>" + email + "</td>";
  content += "<td> <button className='btn btn-primary' role='button' id=' "+data.key+"'>Edit</button></td>";

  content +=   " <td> <button   className='btn btn-primary deleteuser'   onClick={delete_}  role='button'  id=' "+data.key+"'>delete</button></td>";
  content +=   "</tr>";
  console.log("qqq"+ content);
  $(".userdata").append(content);
  content =""; 
  console.log("qqq"+ data.key);
});
});



$(document).on("click", ".delete_", function() {
   
      var ids = $(this).attr("id");
      console.log(ids);

      firebase.database().ref("user/" + ids).remove();
    //  window.location.href = "./Orders.php";
   
    //  console.log("not deleted");
  
});

// updateStarCount(postElement, data);






   // $(document).on("click", ".update", function() {
   //     var ids = $(this).attr("id");
   //     console.log(ids);

   //     window.location.href = "./UpdateOrders.php?userid=" + ids;
   // });
}

function Mainpage() {
 
if(count==0){

    count++;
      FetchAllUsers();
    }
    
        const data = [
            { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
          ]
    
        return(
            <>
            
            <div className='container'>
    
            <h2>User Data</h2>
    
          <table className="table margentop">
          <thead>
            <tr>
            
              <th  scope="col">  firstName</th>
              <th  scope="col">lastName</th>
              <th  scope="col">email</th>
              <th  scope="col">Edite</th>
              <th  scope="col">delete</th>
            </tr>
            </thead>
            <tbody className='userdata'>
            {
            
            /*{
            data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td> <a className="btn btn-primary" href="#" role="button">Edit</a></td>
    
                  <td> <a className="btn btn-primary" href="#" role="button">delete</a></td>
                </tr>
              )
            })
            } */
            }
            </tbody>
          </table>
          </div>
           </>
        )       
}

export default Mainpage