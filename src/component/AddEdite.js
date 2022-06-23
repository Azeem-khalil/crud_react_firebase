import React,{useEffect,useState} from 'react'
import {initial, isEmpty} from "lodash"
import firebase, { dataref } from './Firebase';
import { getDatabase, ref, onValue, push} from "firebase/database";
import {useNavigate,useParams } from "react-router-dom"
function AddEdite() {

    
    const values={
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "" 

    }
    const [data,setData]=useState({});
    const navigate=useNavigate ();
    const [initialState,setState]=useState(values);
    const {firstname,lastname,email,password,confirmpassword}=initialState;
   
    let currentid=useParams();
    const {id}=currentid;


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

});
    },[id]);

    useEffect(()=>{

        if(isEmpty(id)){
            setState({...values});
           // console.log("empty: ");
        }else{
            setState({...data[id]});
            // setState((prevState) => ({
            //     ...prevState,
            //     ...data.id
                
            // }));
            console.log("not empty: ");

        }
    },[id,data]);
    
//console.log("data: "+ data[id].firstname);

const handleinputChange=(event)=>{
    let {name,value}=event.target;
setState({
    ...initialState,
    [name]:value,
});
}; 

const handleSubmit=(event)=>{
    event.preventDefault();
    if(isEmpty(id)){
        firebase.database().ref().child("user").push(initialState,(er)=>{
            if(er){
                alert("error in database");
            }
        }
        );
        
    }else{
        firebase.database().ref().child("/user/"+id).set(initialState,(er)=>{
            if(er){
                alert("error in database");
            }
        }
        );
    }
   
    navigate("/");
};


  return (
    <>
    <div className='container mt-5'>
<div className='row'>
<div className='col-md-6'>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label className='bmd--lable-floating'> first name</label>
            <input className='form-control' type="text"
            values={firstname}
            name="firstname"
            onChange={handleinputChange} />
        
        </div>
        <div className='form-group'>
            <label className='bmd--lable-floating'> Last Name</label>
            <input className='form-control' type="text"
            values={lastname}
            name="lastname"
            onChange={handleinputChange} />
        
        </div>

        <div className='form-group'>
            <label className='bmd--lable-floating'> Email</label>
            <input className='form-control' type="text"
            values={email}
            name="email"
            onChange={handleinputChange} />
        
        </div>

        <div className='form-group'>
            <label className='bmd--lable-floating'>Password</label>
            <input className='form-control' type="text"
            values={password}
            name="password"
            onChange={handleinputChange} />
        
        </div>

        <div className='form-group'>
            <label className='bmd--lable-floating'> Confirm Password</label>
            <input className='form-control' type="text"
            values={confirmpassword}
            name="confirmpassword"
            onChange={handleinputChange} />
        
        </div>
<button className='btn bnt-default'>Cancel</button>
<button className='btn bnt-success btn-raised' type='submit'>Submit</button>

    </form>
    
</div>

</div>

    </div>
    </>)
}

export default AddEdite