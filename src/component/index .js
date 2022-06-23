import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import firebase, { dataref } from './Firebase';
import { getDatabase, ref, onValue, push} from "firebase/database";
function ListRecord () {
    const [data,setData]=useState({});
    useEffect(()=>{

        const db = getDatabase();
        const starCountRef = ref(db, 'user');
        onValue(starCountRef, (snapshot) => {
        //const data = snapshot.val();
        console.log("qqq"+ snapshot.key);
        if(snapshot!=null){
            setData({
                ...snapshot.val(),
            });
        }else{
            snapshot({});
        }
//         snapshot.forEach(data => {

// //firebase.database.ref.child("user").on("value",(snapshot)=>{
//     if(snapshot!=null){
//         setData({
//             ...snapshot.val(),
//         });
//     }else{
//         snapshot({});
//     }
    
// });
});
    },[]);

    const onDelete=(id)=>{
        if(window.confirm("Are sure delete this record ?")){
  firebase
  .database()
  .ref("user/" + id)
  .remove();}
    }
  return(
<>
    {/* <div className="Container-fluid mt-5">
     <div className="row">
        <div className="col-lg-12">
            <div className="Jumbotron">
                <div>
                Conrent Of List

                </div>

            </div>
        </div>
        </div> 
         </div> */}
         <div className='container'>
    
    <h2>User Data</h2>

  <table className="table margentop">
  <thead>
    <tr>
    
      <th  scope="col">  firstName</th>
      <th  scope="col">lastName</th>
      <th  scope="col">email</th>
      <th  scope="col">update</th>
      <th  scope="col">delete</th>

     
    </tr>
    </thead>
    <tbody className='userdata'>
    {Object.keys(data).map((id,index)=>{
        return(
            <tr>
                <td>{data[id].firstname}</td>
                <td>{data[id].lastname}</td>
                <td>{data[id].email}</td>
               <td> <Link to={'/update/'+id}>
                <a class="btn btn-primary" href="#" role="button">update</a>
            </Link> </td><td>
            <a class="btn btn-primary" href="#" onClick={()=>onDelete(id)} role="button">delete</a>
            </td>
            </tr>
            
        )
    })}
    
    
    </tbody>
  </table>
  </div>
         </>)
}

export default ListRecord 