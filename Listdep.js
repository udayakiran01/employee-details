import React, { useState } from 'react'
import { useNavigate } from 'react-router';

import axios from 'axios';
import { Link } from 'react-router-dom';


function Listdep() {
    const [departments, setDepartments] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
    .then(res => setDepartments(res.data))
    .catch(err => console.log(err))
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    

    
  return (
                    <div>
                        <header className='header'>
                        <form className='header'>
                            <input type="text" placeholder='search for department..' 
                              onChange={(e) => setSearch(e.target.value)}/>
                               
                            </form>
                        <h1 className='text-center'>Departments</h1>
                        <button onClick={() => navigate('/')}>Back To Home</button>
                        
                        </header>
        
                        <div className='row'>
                            <table className='table table-striped table-bordered table-center'>
                                <thead>
                                    <tr>
                                        <th >Departments</th>
                                        <th >Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        departments.filter((item) => {
                                            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                                        }).map(
                                            (item) => (
                                            <tr key = {item.id}>
                                              <td><Link to='/Rd'>{item.title}</Link></td>
                                                <td className='td'>
                                                    <button >Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    
                                   
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                );
             }
  


export default Listdep