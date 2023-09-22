import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router';
import { useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  // const [employees, setEmployees] = useState([])
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone:""
})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => {
      setValues(res.data)
    })
    .catch(err => console.log(err));
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users/'+ id, values)
    .then(res => 
        {
            console.log(res);
            navigate('/Rd')
        })
      }
  return (
    <><div >
              
    <div className='card col-md-6 offset-md-3 offset-md-3'>
      <header className='head'>
          <h1 >Edit Employee</h1>

          </header>
          <div className='card-body'>
      <form className='form' onSubmit={handleUpdate}>

      <span className='span'>Name</span>
          <input type='text' name='name' placeholder='Enter dep..'
           value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>

      <span className='span'>UserName</span>
          <input type='text' name='username' placeholder='Enter name..' 
           value={values.username} onChange={e => setValues({...values, username: e.target.value})}/>


      <span className='span'>Email id</span>
          <input type='text' name='email' placeholder='Enter date..' 
           value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>

          
      <span className='span'>Phone Number</span>
          <input type='text' name='phone' placeholder='Enter Email..' 
           value={values.phone} onChange={e => setValues({...values, phone: e.target.value})}/>
           
           <button className='bn'>Update</button>
           <button className='bn' onClick={() => navigate('/Rd')}>Back</button>
      </form>
      </div>
  
  
      </div>
      
      </div>
      </>


);
}


export default Edit