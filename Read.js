import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Read() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+ id )
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h2>detail of Employee</h2>
        <div className='mb-2'>
              <strong>Name:{employees.name}</strong>
        </div>
        <div className='mb-2'>
              <strong>UserName:{employees.username}</strong>
        </div>
        <div className='mb-2'>
              <strong>Email:{employees.email}</strong>
        </div>
        <div className='mb-2'>
              <strong>Phone:{employees.phone}</strong>
        </div>
        <div className='bnn'>
        <button  onClick={() => navigate('/edit/${id}')}>Edit</button>
        <button  onClick={() => navigate('/Rd')}>Back</button>
        </div>
        </div>
        
    </div>
  )
}

export default Read